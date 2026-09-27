import * as THREE from 'three';

/* ---------------------------------------------------------------------------
   程序化车身（小米 SU7 风格，风格化重建，不是官方精确模型）

   侧面轮廓沿用首页 SVG 那套控制点，两个页面的比例因此一致：
     SVG x 108 → 1146   车长  -2.4985 → +2.4985 m（4997mm）
     SVG y 428 → 146    高度   0 → 1.455 m（1455mm，地面 y = 0）

   注意：二维图里门槛线正好压在前轮心高度，直接用会得到刀刃状车头，
   所以三维版本把门槛单独降到 0.19m，轮眉高度按轮胎外径重算。

   做法：沿车长切 96 个横截面，每截面由 8 个控制点闭合成一条
   Catmull-Rom 环，再把相邻截面缝成三角面。轮眉不挖洞，而是让下沿
   在前后轮位置抬起一个半圆。灯组同样不额外建几何体，而是把车头 /
   车尾腰线附近的面单独分组换成自发光材质，这样灯条严格贴合曲面。
   --------------------------------------------------------------------------- */

const SVG_X0 = 108;
const SVG_X1 = 1146;
const SVG_Y_GROUND = 428;
const SVG_Y_ROOF = 146;
const CAR_LENGTH = 4.997;
const CAR_HEIGHT = 1.455;

const toX = (svgX) => ((svgX - SVG_X0) / (SVG_X1 - SVG_X0) - 0.5) * CAR_LENGTH;
const toY = (svgY) => ((SVG_Y_GROUND - svgY) / (SVG_Y_GROUND - SVG_Y_ROOF)) * CAR_HEIGHT;

const X_START = toX(SVG_X0);
const X_END = toX(SVG_X1);

/* 机盖 / 前风挡 / 车顶 / 后风挡 / 尾箱盖 的轮廓线（SVG 坐标，x 递增） */
const TOP_SVG = [
  [132, 296],
  [240, 268],
  [424, 240],
  [586, 166],
  [814, 154],
  [972, 198],
  [1114, 238],
  [1146, 280],
];

const WHEEL_T = [0.2139, 0.8015]; // 前后轮在车长上的归一化位置
const ARCH_RADIUS_T = 0.084; // 轮眉半径，约 0.42m（比轮胎半径略大）
const ARCH_HEIGHT = 0.52; // 轮眉抬起高度（要盖过轮胎外径）
const ROCKER = 0.2; // 门槛下沿离地高度
const HALF_WIDTH = 0.985; // 车身半宽（1963mm / 2）
const WHEEL_RADIUS = 0.335;
const WHEEL_WIDTH = 0.255;
const TRACK_Z = 0.8;

const STATIONS = 100;
const RING_POINTS = 60;

const CABIN_T0 = 0.3; // 座舱玻璃起止（留出 A / C 柱）
const CABIN_T1 = 0.84;
const LIGHT_BAND = [-0.012, 0.072]; // 灯条相对腰线的上下偏移
const HEAD_T1 = 0.03;
const TAIL_T0 = 0.97;

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smoothstep = (a, b, x) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

/* 车顶控制点 → y(x) 查询表（x 单调递增） */
function buildRoofSampler() {
  const points = TOP_SVG.map(([x, y]) => new THREE.Vector3(toX(x), toY(y), 0));
  const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
  const samples = curve.getPoints(900);

  const xs = [];
  const ys = [];
  for (const p of samples) {
    if (xs.length === 0 || p.x > xs[xs.length - 1] + 1e-5) {
      xs.push(p.x);
      ys.push(p.y);
    }
  }

  return (x) => {
    if (x <= xs[0]) return ys[0];
    const last = xs.length - 1;
    if (x >= xs[last]) return ys[last];
    let lo = 0;
    let hi = last;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (xs[mid] <= x) lo = mid;
      else hi = mid;
    }
    const f = (x - xs[lo]) / (xs[hi] - xs[lo]);
    return ys[lo] + (ys[hi] - ys[lo]) * f;
  };
}

/* 门槛线：端部略微收起 */
function rockerAt(t) {
  return ROCKER + 0.09 * (Math.exp(-t * 26) + Math.exp(-(1 - t) * 26));
}

/* 轮拱抬起量。只加在外侧蒙皮上，底面中心保持门槛高度，
   否则整段车身会在轮位“收腰”，轮子会像插在轴上的圆筒。

   半圆轮廓在端点处斜率无穷大，直接接回门槛会生成一圈鳍状破面，
   所以用 core × window 组合：core 保证盖住轮胎外径，window 让
   收尾处以零斜率平滑归零。 */
const ARCH_CORE = 0.82;

function archAt(t) {
  let lift = 0;
  for (const wt of WHEEL_T) {
    const u = Math.abs(t - wt) / ARCH_RADIUS_T;
    if (u >= 1) continue;
    const core = u < ARCH_CORE ? Math.sqrt(1 - (u / ARCH_CORE) ** 2) : 0;
    const window = 1 - smoothstep(ARCH_CORE, 1, u);
    lift += ARCH_HEIGHT * core * window;
  }
  return lift;
}

/* 平面图半宽：车头车尾是钝的，不是尖的 */
function halfWidthAt(t) {
  const nose = smoothstep(0, 0.085, t);
  const tail = 1 - smoothstep(0.915, 1, t);
  const plan = 0.62 + 0.38 * Math.pow(Math.min(nose, tail), 0.55);
  return HALF_WIDTH * plan;
}

function catmull2(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  const f0 = -0.5 * t3 + t2 - 0.5 * t;
  const f1 = 1.5 * t3 - 2.5 * t2 + 1;
  const f2 = -1.5 * t3 + 2 * t2 + 0.5 * t;
  const f3 = 0.5 * t3 - 0.5 * t2;
  return [
    p0[0] * f0 + p1[0] * f1 + p2[0] * f2 + p3[0] * f3,
    p0[1] * f0 + p1[1] * f1 + p2[1] * f2 + p3[1] * f3,
  ];
}

/* 8 个控制点闭合成一圈采样点，坐标为 [z, y] */
function sampleRing(controlPoints, count) {
  const n = controlPoints.length;
  const at = (i) => controlPoints[((i % n) + n) % n];
  const out = [];
  for (let s = 0; s < count; s++) {
    const g = (s / count) * n;
    const i = Math.floor(g);
    out.push(catmull2(at(i - 1), at(i), at(i + 1), at(i + 2), g - i));
  }
  return out;
}

function ringAt(t, roofAt) {
  const yRocker = rockerAt(t);
  const yTop = Math.max(yRocker + 0.28, roofAt(X_START + t * (X_END - X_START)));
  const arch = archAt(t);
  const ySideBottom = yRocker + arch;
  // 腰线（截面最宽处）要留在轮眉上沿之上
  const yBelt = Math.max(yRocker + (yTop - yRocker) * 0.58, ySideBottom + 0.03);
  const hw = halfWidthAt(t);
  // 轮拱处外蒙皮接近全宽，把轮胎兜住；其余位置下摆内收，避免板砖感
  const sideFactor = 0.86 + 0.1 * (arch / ARCH_HEIGHT);
  const shoulderY = yBelt + Math.max(0.03, (yTop - yBelt) * 0.55);
  return {
    yBottom: ySideBottom,
    yTop,
    yBelt,
    yRocker,
    points: [
      // 底面中心也跟着抬一部分，否则轮位会形成一个又深又亮的“隧道”，
      // 从低角度看就是两片突兀的蓝色鳍片
      [0, yRocker + arch * 0.55],
      [hw * sideFactor, ySideBottom + 0.01],
      [hw, yBelt],
      [hw * 0.97, shoulderY],
      [hw * 0.72, yTop - 0.02],
      [0, yTop],
      [-hw * 0.72, yTop - 0.02],
      [-hw * 0.97, shoulderY],
      [-hw, yBelt],
      [-hw * sideFactor, ySideBottom + 0.01],
    ],
  };
}

const PAINT = 0;
const GLASS = 1;
const HEAD = 2;
const TAIL = 3;
const TRIM = 4;

function classify(face) {
  const { t, y, minY, belt, absZ, hw, top, rocker } = face;

  if (t > CABIN_T0 && t < CABIN_T1 && y > belt + 0.008) {
    // 车顶那一块要留成车漆，否则整台车顶都会变成黑玻璃
    const isRoofPanel = y > top - 0.06 && absZ < hw * 0.6;
    if (!isRoofPanel) return GLASS;
  }

  const lo = belt + LIGHT_BAND[0];
  const hi = belt + LIGHT_BAND[1];
  if (y > lo && y < hi) {
    if (t < HEAD_T1) return HEAD;
    if (t > TAIL_T0) return TAIL;
  }

  // 贴着门槛的窄带做成深色侧裙 / 前后下包围
  if (minY < rocker + 0.13) return TRIM;
  return PAINT;
}

function createBodyGeometry() {
  const roofAt = buildRoofSampler();

  const rings = [];
  for (let i = 0; i < STATIONS; i++) {
    const t = i / (STATIONS - 1);
    const x = X_START + t * (X_END - X_START);
    const ring = ringAt(t, roofAt);
    rings.push({
      t,
      x,
      yBelt: ring.yBelt,
      yTop: ring.yTop,
      yRocker: ring.yRocker,
      hw: halfWidthAt(t),
      pts: sampleRing(ring.points, RING_POINTS),
    });
  }

  const positions = [];
  for (const ring of rings) {
    for (const [z, y] of ring.pts) positions.push(ring.x, y, z);
  }

  const buckets = [[], [], [], [], []];

  for (let i = 0; i < STATIONS - 1; i++) {
    const a0 = rings[i];
    const a1 = rings[i + 1];
    const tMid = (a0.t + a1.t) * 0.5;
    const avgBelt = (a0.yBelt + a1.yBelt) * 0.5;

    for (let j = 0; j < RING_POINTS; j++) {
      const k = (j + 1) % RING_POINTS;
      const A = i * RING_POINTS + j;
      const B = (i + 1) * RING_POINTS + j;
      const C = (i + 1) * RING_POINTS + k;
      const D = i * RING_POINTS + k;

      const avgY = (a0.pts[j][1] + a0.pts[k][1] + a1.pts[j][1] + a1.pts[k][1]) * 0.25;
      const minY = Math.min(a0.pts[j][1], a0.pts[k][1], a1.pts[j][1], a1.pts[k][1]);
      const avgZ = (a0.pts[j][0] + a0.pts[k][0] + a1.pts[j][0] + a1.pts[k][0]) * 0.25;
      const bucket = classify({
        t: tMid,
        y: avgY,
        minY,
        belt: avgBelt,
        rocker: (a0.yRocker + a1.yRocker) * 0.5,
        absZ: Math.abs(avgZ),
        hw: (a0.hw + a1.hw) * 0.5,
        top: (a0.yTop + a1.yTop) * 0.5,
      });
      // 缠绕顺序 (A,C,B) (A,D,C) 保证法线朝外
      buckets[bucket].push(A, C, B, A, D, C);
    }
  }

  /* 首尾封口：当成前 / 后保险杠正面 */
  const cap = (stationIndex, dirX) => {
    const ring = rings[stationIndex];
    const base = stationIndex * RING_POINTS;
    let cy = 0;
    let cz = 0;
    for (const [z, y] of ring.pts) {
      cy += y;
      cz += z;
    }
    cy /= RING_POINTS;
    cz /= RING_POINTS;

    const center = positions.length / 3;
    positions.push(ring.x, cy, cz);

    for (let j = 0; j < RING_POINTS; j++) {
      const k = (j + 1) % RING_POINTS;
      const P = base + j;
      const Q = base + k;
      const nx =
        (positions[P * 3 + 1] - cy) * (positions[Q * 3 + 2] - cz) -
        (positions[P * 3 + 2] - cz) * (positions[Q * 3 + 1] - cy);
      buckets[PAINT].push(center, P, Q);
      if (nx * dirX < 0) {
        buckets[PAINT].splice(buckets[PAINT].length - 3, 3, center, Q, P);
      }
    }
  };

  cap(0, -1);
  cap(STATIONS - 1, 1);

  const indices = [];
  const groups = [];
  for (let m = 0; m < buckets.length; m++) {
    const start = indices.length;
    for (const v of buckets[m]) indices.push(v);
    groups.push([start, buckets[m].length, m]);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  for (const [start, count, materialIndex] of groups) {
    if (count > 0) geometry.addGroup(start, count, materialIndex);
  }
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

function createWheel() {
  const group = new THREE.Group();

  const tire = new THREE.Mesh(
    new THREE.CylinderGeometry(WHEEL_RADIUS, WHEEL_RADIUS, WHEEL_WIDTH, 44, 1, false),
    new THREE.MeshStandardMaterial({ color: 0x0a0b0e, roughness: 0.88, metalness: 0.02 })
  );
  tire.rotation.x = Math.PI / 2;
  group.add(tire);

  const rimMaterial = new THREE.MeshStandardMaterial({
    color: 0x8e98a4,
    roughness: 0.36,
    metalness: 0.85,
  });

  const barrel = new THREE.Mesh(
    new THREE.CylinderGeometry(WHEEL_RADIUS * 0.66, WHEEL_RADIUS * 0.66, WHEEL_WIDTH * 1.02, 40),
    new THREE.MeshStandardMaterial({ color: 0x15181d, roughness: 0.42, metalness: 0.8 })
  );
  barrel.rotation.x = Math.PI / 2;
  group.add(barrel);

  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(WHEEL_RADIUS * 0.19, WHEEL_RADIUS * 0.19, WHEEL_WIDTH * 1.06, 24),
    rimMaterial
  );
  hub.rotation.x = Math.PI / 2;
  group.add(hub);

  const spokeGeometry = new THREE.BoxGeometry(WHEEL_RADIUS * 0.11, WHEEL_RADIUS * 0.92, 0.028);
  for (let i = 0; i < 5; i++) {
    const spoke = new THREE.Mesh(spokeGeometry, rimMaterial);
    spoke.rotation.z = (i / 5) * Math.PI;
    spoke.position.z = WHEEL_WIDTH * 0.5;
    group.add(spoke);
  }

  return group;
}

export const CAR_COLORS = {
  海湾蓝: 0x2f5fd0,
  雅灰: 0x8d9299,
  霞光紫: 0x6d5aa6,
  钻石黑: 0x15171c,
};

export function buildCar() {
  const group = new THREE.Group();

  const paintMaterial = new THREE.MeshPhysicalMaterial({
    color: CAR_COLORS['海湾蓝'],
    // 车漆是「电介质 + 清漆」，不是金属；写成金属在这种暗棚里会变成一块黑
    metalness: 0.15,
    roughness: 0.34,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    envMapIntensity: 1.5,
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x1b2836,
    metalness: 0.1,
    roughness: 0.07,
    clearcoat: 1,
    clearcoatRoughness: 0.03,
    envMapIntensity: 2.6,
  });

  const headMaterial = new THREE.MeshStandardMaterial({
    color: 0x0b1018,
    emissive: 0xdcebff,
    emissiveIntensity: 2.4,
    roughness: 0.28,
    metalness: 0.1,
  });

  const tailMaterial = new THREE.MeshStandardMaterial({
    color: 0x180604,
    emissive: 0xff3d12,
    emissiveIntensity: 2.0,
    roughness: 0.32,
    metalness: 0.1,
  });

  const trimMaterial = new THREE.MeshStandardMaterial({
    color: 0x0c0f14,
    roughness: 0.62,
    metalness: 0.5,
  });

  const body = new THREE.Mesh(createBodyGeometry(), [
    paintMaterial,
    glassMaterial,
    headMaterial,
    tailMaterial,
    trimMaterial,
  ]);
  group.add(body);

  for (const wx of [toX(330), toX(940)]) {
    for (const wz of [TRACK_Z, -TRACK_Z]) {
      const wheel = createWheel();
      wheel.position.set(wx, WHEEL_RADIUS, wz);
      group.add(wheel);
    }
  }

  // 后视镜：很小一块，但对“这是辆车”的辨识度帮助很大
  for (const side of [1, -1]) {
    const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.075, 0.14), paintMaterial);
    mirror.position.set(toX(452), 1.02, side * 1.03);
    mirror.rotation.z = 0.06 * side;
    group.add(mirror);
  }

  /* 居中并把车底贴到 y = 0 */
  group.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(group);
  const center = box.getCenter(new THREE.Vector3());
  group.position.set(-center.x, -box.min.y, -center.z);

  const wrapper = new THREE.Group();
  wrapper.add(group);

  return {
    object: wrapper,
    paintMaterial,
    glassMaterial,
    headMaterial,
    tailMaterial,
    trimMaterial,
    setPaint(hex) {
      paintMaterial.color.setHex(hex);
    },
  };
}
