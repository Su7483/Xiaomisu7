import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

/* ---------------------------------------------------------------------------
   官方车模加载器。

   放进 assets/su7.glb 就会被自动接管，没有这个文件则回退到程序化车身。

   加载后做四件事：
     1) 轴向归一：最长轴转到 X 轴（本项目约定车长沿 X、车宽沿 Z），按 4997mm
        等比缩放，底面贴地、水平居中。最后套一层 pivot，方便外部整体旋转而
        不影响内部已有的朝向修正。
     2) 车漆识别：先按材质名认（Car_body / body_paint / paint 这类），认不出
        再退回到「面积最大且名字不像零件」的材质。纯按面积会选错——实测
        Sketchfab 那份 SU7 里面积最大的是内饰 interior4.001。
     3) 材质归一：下载来的模型普遍是「展厅镜面」参数（那份 SU7 的车漆
        roughness 只有 0.036），配上影棚灯光就是一道激光扫来扫去，非常晃眼。
        这里把粗糙度抬到摄影棚级别的区间，并把清漆层调软。
     4) 玻璃不做 transmission：那需要额外一整趟渲染，而且在这种纯黑环境里
        观感不稳定，直接用深色高反射代替。
   --------------------------------------------------------------------------- */

const TARGET_LENGTH = 4.997; // 与程序化车身保持同一尺度
const MODEL_YAW_OFFSET = Math.PI; // 这份模型的正面朝 +X，转 180° 对齐到 -X
const DECODER_PATH = './runtime/draco/';

/* 明确是车漆的名字 */
const PAINT_HINTS = /(^|[\s._-])(car[._-]?body|body[._-]?paint|car[._-]?paint|paint|车身|车漆)([\s._-]|$)/i;

/* 明显不是车漆的名字 */
const NON_PAINT = /glass|window|wind|screen|chrome|tire|tyre|wheel|rim|brake|caliper|light|lamp|logo|badge|plate|chepai|interior|inside|seat|floor|mirror|carpet|leather|plastic|rubber|shadow|radar|iron|black/i;

/* 摄影棚里的车漆参数：宁可稍钝一点，也不要出现刺眼的一条高光 */
const PAINT_LOOK = {
  roughness: 0.26,
  clearcoat: 1,
  clearcoatRoughness: 0.18,
  envMapIntensity: 0.85,
};

const MIN_ROUGHNESS = 0.14; // 其余金属件、饰条的统一下限
const GLASS_MIN_ROUGHNESS = 0.13; // 再低就会在天窗上留下一团刺眼的顶灯倒影
const GLASS_ENV_INTENSITY = 1.2;

function triangleCountByMaterial(root) {
  const stats = new Map();

  root.traverse((node) => {
    if (!node.isMesh || !node.geometry) return;
    const geometry = node.geometry;
    const position = geometry.attributes.position;
    if (!position) return;

    const materials = Array.isArray(node.material) ? node.material : [node.material];
    const total = (geometry.index ? geometry.index.count : position.count) / 3;
    const groups = geometry.groups && geometry.groups.length ? geometry.groups : null;

    if (!groups) {
      const material = materials[0];
      if (material) stats.set(material, (stats.get(material) || 0) + total);
      return;
    }

    for (const group of groups) {
      const material = materials[group.materialIndex] || materials[0];
      if (!material) continue;
      stats.set(material, (stats.get(material) || 0) + group.count / 3);
    }
  });

  return stats;
}

const isOpaque = (material) => material && !material.transparent && material.opacity >= 1;

function pickPaintMaterial(root) {
  const stats = triangleCountByMaterial(root);
  const opaque = [...stats.entries()].filter(([material]) => isOpaque(material));

  // 1) 名字明确写了是车漆的，取其中面积最大的
  const named = opaque
    .filter(([material]) => PAINT_HINTS.test(material.name || ''))
    .sort((a, b) => b[1] - a[1]);
  if (named.length) return named[0][0];

  // 2) 退回到面积最大、且名字不像零件的
  const fallback = opaque
    .filter(([material]) => !NON_PAINT.test(material.name || ''))
    .sort((a, b) => b[1] - a[1]);
  if (fallback.length) return fallback[0][0];

  // 3) 实在认不出就用面积最大的
  return opaque.sort((a, b) => b[1] - a[1])[0]?.[0] || null;
}

function normaliseMaterials(root, paintMaterial) {
  const seen = new Set();
  root.traverse((node) => {
    if (!node.isMesh) return;
    const materials = Array.isArray(node.material) ? node.material : [node.material];
    for (const material of materials) {
      if (!material || seen.has(material.uuid)) continue;
      seen.add(material.uuid);

      const name = material.name || '';
      const isPaint = material === paintMaterial;
      const isGlass = /glass|window|wind/i.test(name);

      if (isPaint) {
        material.roughness = PAINT_LOOK.roughness;
        if ('clearcoat' in material) material.clearcoat = PAINT_LOOK.clearcoat;
        if ('clearcoatRoughness' in material) {
          material.clearcoatRoughness = PAINT_LOOK.clearcoatRoughness;
        }
        material.envMapIntensity = PAINT_LOOK.envMapIntensity;
        material.transmission = 0;
        material.needsUpdate = true;
        continue;
      }

      if (isGlass) {
        material.roughness = Math.max(material.roughness ?? 0.1, GLASS_MIN_ROUGHNESS);
        // transmission 要额外跑一整趟渲染，暗场里收益也有限，直接关掉
        material.transmission = 0;
        material.envMapIntensity = GLASS_ENV_INTENSITY;
        material.needsUpdate = true;
        continue;
      }

      if (typeof material.roughness === 'number') {
        material.roughness = Math.max(material.roughness, MIN_ROUGHNESS);
      }
      if (material.transmission) material.transmission = 0;
      material.needsUpdate = true;
    }
  });
}

function normalise(root) {
  root.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());

  // 最长轴转到 X
  if (size.z > size.x) {
    root.rotation.y = -Math.PI / 2;
    root.updateMatrixWorld(true);
  } else if (size.y > Math.max(size.x, size.z)) {
    root.rotation.x = Math.PI / 2;
    root.updateMatrixWorld(true);
  }

  const rotated = new THREE.Box3().setFromObject(root);
  const rotatedSize = rotated.getSize(new THREE.Vector3());
  root.scale.multiplyScalar(TARGET_LENGTH / Math.max(0.001, rotatedSize.x));
  root.rotation.y += MODEL_YAW_OFFSET;
  root.updateMatrixWorld(true);

  const scaled = new THREE.Box3().setFromObject(root);
  const center = scaled.getCenter(new THREE.Vector3());
  root.position.x -= center.x;
  root.position.y -= scaled.min.y;
  root.position.z -= center.z;
  root.updateMatrixWorld(true);
}

export async function loadCarModel(url, onProgress) {
  const draco = new DRACOLoader();
  draco.setDecoderPath(DECODER_PATH);

  const loader = new GLTFLoader();
  loader.setDRACOLoader(draco);

  try {
    const gltf = await loader.loadAsync(url, (event) => {
      if (!onProgress) return;
      if (event.lengthComputable && event.total > 0) {
        onProgress(Math.min(1, event.loaded / event.total));
      }
    });

    normalise(gltf.scene);
    const paintMaterial = pickPaintMaterial(gltf.scene);
    normaliseMaterials(gltf.scene, paintMaterial);

    gltf.scene.traverse((node) => {
      if (node.isMesh) node.frustumCulled = false;
    });

    /* 外面套一层 pivot：外部只旋转这一层，内部的轴向修正不受影响 */
    const pivot = new THREE.Group();
    pivot.add(gltf.scene);

    const box = new THREE.Box3().setFromObject(pivot);
    const size = box.getSize(new THREE.Vector3());

    return {
      object: pivot,
      paintMaterial,
      paintName: paintMaterial ? paintMaterial.name || '(未命名)' : '(未识别)',
      size,
      setPaint(hex) {
        if (paintMaterial) paintMaterial.color.setHex(hex);
      },
      dispose() {
        draco.dispose();
      },
    };
  } catch (error) {
    draco.dispose();
    return { error };
  }
}
