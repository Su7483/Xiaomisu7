import * as THREE from 'three';

/* ---------------------------------------------------------------------------
   影棚环境。
   车漆的质感几乎全部来自环境反射，所以这里不放普通灯光，而是搭一个由
   若干发光面片组成的“影棚”，再用 PMREM 烘焙成环境贴图。车漆上那几条
   横向高光，就是顶部光带在曲面上的反射。
   --------------------------------------------------------------------------- */

function lightPanel(scene, width, height, hex, intensity, position, rotation) {
  const material = new THREE.MeshBasicMaterial();
  // 允许超过 1，得到 HDR 高光
  material.color.setHex(hex).multiplyScalar(intensity);
  const panel = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
  panel.position.set(position[0], position[1], position[2]);
  panel.rotation.set(rotation[0], rotation[1], rotation[2]);
  scene.add(panel);
  return panel;
}

export function createStudioEnvironment(renderer) {
  const scene = new THREE.Scene();

  const room = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x1a2536, side: THREE.BackSide })
  );
  room.scale.set(26, 12, 26);
  room.position.y = 4;
  scene.add(room);

  /* 光源面积越大、亮度越低，车漆上的高光越宽越柔。
     窄光带在低粗糙度车漆上会变成一条刺眼的激光，转镜头时特别晃眼，
     所以这里统一用「大面积 + 低强度」。 */
  // 顶部主光：车漆上的主高光带
  lightPanel(scene, 26, 8, 0xffffff, 1.95, [0, 9.6, 0], [Math.PI / 2, 0, 0]);
  // 左右柔光箱：冷 / 暖双色，让曲面有色彩层次
  lightPanel(scene, 18, 8, 0x9fd0ff, 1.7, [-9.8, 4.6, 0.5], [0, Math.PI / 2, 0]);
  lightPanel(scene, 18, 8, 0xffd2a8, 1.15, [9.8, 4.6, -0.5], [0, -Math.PI / 2, 0]);
  // 尾部轮廓光
  lightPanel(scene, 13, 2.6, 0x00d2ff, 1.25, [0, 3.4, -11], [0, 0, 0]);
  // 地面反射板
  lightPanel(scene, 22, 22, 0x101a26, 0.7, [0, -0.7, 0], [-Math.PI / 2, 0, 0]);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const target = pmrem.fromScene(scene, 0.04);

  pmrem.dispose();
  scene.traverse((child) => {
    if (child.isMesh) {
      child.geometry.dispose();
      child.material.dispose();
    }
  });

  return target.texture;
}

/* 地面：一圈径向渐隐的深色高反射圆盘，边缘溶进黑场 */
export function createFloor() {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgb(255,255,255)');
  gradient.addColorStop(0.5, 'rgb(196,196,196)');
  gradient.addColorStop(0.82, 'rgb(58,58,58)');
  gradient.addColorStop(1, 'rgb(0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const alphaMap = new THREE.CanvasTexture(canvas);
  alphaMap.colorSpace = THREE.NoColorSpace;

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(10, 96),
    new THREE.MeshStandardMaterial({
      color: 0x04060a,
      metalness: 0.94,
      roughness: 0.5,
      envMapIntensity: 0.3,
      alphaMap,
      transparent: true,
      depthWrite: false,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.renderOrder = -1;
  return floor;
}
