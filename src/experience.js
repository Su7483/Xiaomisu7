import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

import { buildCar, CAR_COLORS } from './lib/car.js';
import { loadCarModel } from './lib/model.js';
import { createStudioEnvironment, createFloor } from './lib/studio.js';
import { createAmbient } from './lib/audio.js';
import { createTagSphere } from './lib/tagcloud.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

/* 让 experience.html 里的兜底脚本知道 bundle 已经跑起来了 */
window.__SU7_BOOTED__ = true;

const MODEL_URL = './assets/su7.glb';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('stage');
const introBar = document.getElementById('intro-bar');

/* ==========================================================================
   渲染器 / 场景
   ========================================================================== */

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x04060a);
scene.environment = createStudioEnvironment(renderer);
scene.fog = new THREE.Fog(0x04060a, 14, 34);

const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 120);

scene.add(createFloor());

const keyLight = new THREE.DirectionalLight(0xdfeaff, 1);
keyLight.position.set(4, 7, 5);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x2f7bff, 0.6);
rimLight.position.set(-6, 3, -7);
scene.add(rimLight);

/* 补光：压住暗部，避免车身在深色背景里糊成一团 */
const fillLight = new THREE.DirectionalLight(0x9fc4ff, 0.5);
fillLight.position.set(-5, 2.2, 6);
scene.add(fillLight);

scene.add(new THREE.AmbientLight(0x16233a, 1.1));

/* ==========================================================================
   后期
   ========================================================================== */

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.16,
  0.5,
  1.35
);
composer.addPass(bloom);
composer.addPass(new OutputPass());

/* ==========================================================================
   相机编排：滚动进度 0 → 1 依次经过 7 个机位
   注意车长沿 X 轴、车宽沿 Z 轴，车头在 -X，所以「正侧」机位在 Z 轴上。
   ========================================================================== */

const CAMERA_KEYS = [
  { p: 0.0, pos: [-5.8, 3.2, 7.2], look: [0, 0.8, 0] }, // 车头 3/4
  { p: 0.16, pos: [0, 1.25, 8.8], look: [0, 0.8, 0] }, // 正侧
  { p: 0.32, pos: [6.4, 1.5, -6.6], look: [0, 0.8, 0] }, // 车尾 3/4
  { p: 0.48, pos: [-4.2, 5.2, 5.4], look: [0, 0.4, 0] }, // 俯视 3/4
  { p: 0.64, pos: [-5.6, 1.45, 6.0], look: [-1.2, 0.72, 2.4] }, // 前脸特写
  { p: 0.82, pos: [-6.4, 1.6, -6.2], look: [0, 0.8, 0] }, // 另一侧车头 3/4
  { p: 1.0, pos: [7.5, 3.2, 8.0], look: [0, 0.8, 0] }, // 拉远收尾
];

const rig = { p: 0, x: 0, y: 0 };
const camPos = new THREE.Vector3();
const camLook = new THREE.Vector3();
const smoothstep = (t) => t * t * (3 - 2 * t);
const approach = (current, target, rate, dt) =>
  current + (target - current) * (1 - Math.exp(-rate * dt));

function sampleCamera(p) {
  const clamped = Math.max(0, Math.min(1, p));
  let i = 0;
  while (i < CAMERA_KEYS.length - 2 && clamped > CAMERA_KEYS[i + 1].p) i++;
  const a = CAMERA_KEYS[i];
  const b = CAMERA_KEYS[i + 1];
  const span = b.p - a.p || 1;
  const t = smoothstep(Math.max(0, Math.min(1, (clamped - a.p) / span)));

  for (let k = 0; k < 3; k++) {
    camPos.setComponent(k, a.pos[k] + (b.pos[k] - a.pos[k]) * t);
    camLook.setComponent(k, a.look[k] + (b.look[k] - a.look[k]) * t);
  }
}

/* ==========================================================================
   平滑滚动 + 滚动驱动
   ========================================================================== */

let lenis = null;
let scrollVelocity = 0;

if (!reduceMotion) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true, autoRaf: false });
  lenis.on('scroll', (event) => {
    scrollVelocity = event.velocity || 0;
    ScrollTrigger.update();
  });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

gsap.to(rig, {
  p: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: document.documentElement,
    start: 'top top',
    end: 'bottom bottom',
    scrub: reduceMotion ? true : 0.7,
  },
});

/* ==========================================================================
   鼠标交互
   - 拖动车身：绕 Y 轴自由旋转，松手带惯性，双击回正
   - 未拖动时：极轻微的视差，而且是阻尼跟随，不会跟着鼠标抖
   ========================================================================== */

const orbit = {
  y: 0,
  targetY: 0,
  velocity: 0,
  dragging: false,
  lift: 0,
  targetLift: 0,
  lastX: 0,
  lastY: 0,
  pointerId: null,
};

const pointer = { x: 0, y: 0, dampedX: 0, dampedY: 0 };

const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const INTERACTIVE = 'a, button, input, .tags, .swatch, .audio, .topbar';

function isInteractive(target) {
  return !!(target && target.closest && target.closest(INTERACTIVE));
}

/* 拖动车身属于用户主动操作，减少动态效果下也保留，只是去掉惯性 */
if (canHover) {
  window.addEventListener(
    'pointermove',
    (event) => {
      if (reduceMotion) return;
      if (!orbit.dragging) {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
      }
    },
    { passive: true }
  );

  window.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || isInteractive(event.target)) return;
    orbit.dragging = true;
    orbit.velocity = 0;
    orbit.lastX = event.clientX;
    orbit.lastY = event.clientY;
    orbit.pointerId = event.pointerId;
    document.body.classList.add('is-dragging');
  });

  window.addEventListener(
    'pointermove',
    (event) => {
      if (!orbit.dragging || event.pointerId !== orbit.pointerId) return;
      const dx = event.clientX - orbit.lastX;
      const dy = event.clientY - orbit.lastY;
      orbit.lastX = event.clientX;
      orbit.lastY = event.clientY;
      orbit.targetY += dx * 0.008;
      orbit.velocity = dx * 0.008 * 0.55; // 松手后大致延续这个角速度
      orbit.targetLift = Math.max(-0.35, Math.min(0.35, orbit.targetLift + dy * 0.006));
    },
    { passive: true }
  );

  const endDrag = (event) => {
    if (!orbit.dragging || (event && event.pointerId !== orbit.pointerId)) return;
    orbit.dragging = false;
    orbit.pointerId = null;
    document.body.classList.remove('is-dragging');
  };
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  window.addEventListener('dblclick', (event) => {
    if (isInteractive(event.target)) return;
    orbit.targetY = Math.round(orbit.y / (Math.PI * 2)) * Math.PI * 2;
    orbit.targetLift = 0;
    orbit.velocity = 0;
  });
}

/* ==========================================================================
   标签与车模的联动
   点一个关键词，镜头平滑飞到车身对应部位；继续滚动则自动解除。
   ========================================================================== */

const FOCUS_VIEWS = {
  overall: { pos: [-5.8, 3.2, 7.2], look: [0, 0.8, 0] },
  aero: { pos: [0, 1.25, 8.8], look: [0, 0.8, 0] },
  front: { pos: [-6.2, 2.0, 5.4], look: [-2.2, 0.75, 1.1] },
  rear: { pos: [6.4, 2.1, -5.6], look: [2.2, 0.8, -1.1] },
  wheel: { pos: [-3.8, 1.2, 5.2], look: [-1.55, 0.45, 1.0] },
  cabin: { pos: [-2.2, 2.8, 4.6], look: [0.2, 1.0, 0] },
};

const TAGS = [
  { label: 'CLTC 700km', view: 'overall' },
  { label: '0.195Cd', view: 'aero' },
  { label: '5.28s', view: 'rear' },
  { label: '摩德纳平台', view: 'wheel' },
  { label: '碳化硅', view: 'rear' },
  { label: '澎湃OS', view: 'cabin' },
  { label: 'Xiaomi Pilot', view: 'front' },
  { label: '超级电机', view: 'rear' },
  { label: '前双叉臂', view: 'wheel' },
  { label: '后五连杆', view: 'wheel' },
  { label: '热泵空调', view: 'cabin' },
  { label: '3000mm 轴距', view: 'overall' },
  { label: '517L 后备箱', view: 'rear' },
  { label: 'V2L 对外放电', view: 'rear' },
];

const focusState = { w: 0, px: 0, py: 0, pz: 0, lx: 0, ly: 0, lz: 0 };
/* 用原始滚动进度来判断「用户是否已经走开」，而不是用带 scrub 缓动的 rig.p。
   rig.p 在滚动停下后还要几百毫秒才收敛，早先版本拿它比对，导致刚点完
   关键词就被判定为「滚动了」而立刻解除联动——看起来就像完全没联动。 */
let scrollProgress = 0;
let focusOriginP = 0;
let focusLockUntil = 0;
let lastOrbitScrollP = 0;

function applyFocus(view) {
  const spec = FOCUS_VIEWS[view];
  if (!spec) return;
  focusOriginP = scrollProgress;
  focusLockUntil = performance.now() + 1600;
  // 把车身转回正面，否则看的是「背对镜头的那个部位」
  orbit.targetY = Math.round(orbit.y / (Math.PI * 2)) * Math.PI * 2;
  orbit.targetLift = 0;
  orbit.velocity = 0;
  gsap.to(focusState, {
    w: 1,
    px: spec.pos[0],
    py: spec.pos[1],
    pz: spec.pos[2],
    lx: spec.look[0],
    ly: spec.look[1],
    lz: spec.look[2],
    duration: reduceMotion ? 0 : 1.2,
    ease: 'power2.inOut',
    overwrite: true,
  });
}

function clearFocus() {
  if (focusState.w < 0.001) return;
  gsap.to(focusState, {
    w: 0,
    duration: reduceMotion ? 0 : 0.9,
    ease: 'power2.out',
    overwrite: true,
  });
}

const tagContainer = document.getElementById('tags');
const tags = createTagSphere(
  tagContainer,
  TAGS.map((tag) => tag.label),
  {
    onSelect(index) {
      const tag = TAGS[index];
      if (tag) applyFocus(tag.view);
    },
  }
);

/* 滚动离开当前位置就解除聚焦，避免镜头被“钉住” */
ScrollTrigger.create({
  trigger: document.documentElement,
  start: 'top top',
  end: 'bottom bottom',
  onUpdate: (self) => {
    scrollProgress = self.progress;

    /* 拖动车身看过之后，一旦继续滚动就把它缓缓转回展示角度，
       否则后面每一段的机位都是在看车屁股 */
    if (Math.abs(scrollProgress - lastOrbitScrollP) > 0.012) {
      lastOrbitScrollP = scrollProgress;
      const full = Math.PI * 2;
      const aligned = Math.round(orbit.targetY / full) * full;
      if (Math.abs(orbit.targetY - aligned) > 0.04) {
        orbit.targetY = aligned;
        orbit.targetLift = 0;
        orbit.velocity = 0;
      }
    }

    if (performance.now() < focusLockUntil) {
      focusOriginP = scrollProgress; // 锁定期间跟着走，避免刚点就被判为离开
      return;
    }
    if (Math.abs(scrollProgress - focusOriginP) > 0.02) {
      clearFocus();
      tags.release();
    }
  },
});

/* ==========================================================================
   文字：逐行揭示
   ========================================================================== */

document.querySelectorAll('[data-split]').forEach((el) => {
  new SplitText(el, { type: 'lines', linesClass: 'line' });
});

gsap.set('.line', { yPercent: 118, opacity: 0 });
gsap.set('[data-fade]', { y: 22, opacity: 0 });

function revealPanel(panel, immediate) {
  const lines = panel.querySelectorAll('.line');
  const fades = panel.querySelectorAll('[data-fade]');
  const all = Array.prototype.slice.call(lines).concat(Array.prototype.slice.call(fades));
  if (!all.length) return;
  if (reduceMotion || immediate) {
    gsap.set(all, { yPercent: 0, opacity: 1, y: 0 });
    return;
  }
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  if (lines.length) {
    timeline.to(lines, { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.075 }, 0);
  }
  if (fades.length) {
    timeline.to(fades, { y: 0, opacity: 1, duration: 0.9, stagger: 0.055 }, 0.12);
  }
}

const panels = gsap.utils.toArray('.panel');
panels.forEach((panel) => {
  ScrollTrigger.create({
    trigger: panel,
    start: 'top 72%',
    once: true,
    onEnter: () => revealPanel(panel, false),
  });
});

/* ==========================================================================
   数字滚动
   ========================================================================== */

gsap.utils.toArray('[data-count]').forEach((el) => {
  const to = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  if (reduceMotion) {
    el.textContent = to.toFixed(decimals);
    return;
  }
  const state = { value: 0 };
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () =>
      gsap.to(state, {
        value: to,
        duration: 1.6,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = state.value.toFixed(decimals);
        },
      }),
  });
});

/* ==========================================================================
   车漆切换（程序化车身和官方车模走同一套接口）
   ========================================================================== */

let car = null;

function setPaint(hex) {
  if (car && car.setPaint) car.setPaint(hex);
}

document.querySelectorAll('[data-color]').forEach((button) => {
  button.addEventListener('click', () => {
    const hex = parseInt(button.dataset.color.replace('#', ''), 16);
    document.querySelectorAll('[data-color]').forEach((other) => {
      other.setAttribute('aria-pressed', String(other === button));
    });
    const name = document.querySelector('#paint-name');
    if (name) name.textContent = button.dataset.name;
    setPaint(hex);
  });
});

/* ==========================================================================
   环境音
   ========================================================================== */

const ambient = createAmbient();
const audioButton = document.getElementById('audio-toggle');
if (audioButton) {
  audioButton.addEventListener('click', async () => {
    const on = await ambient.toggle();
    audioButton.setAttribute('aria-pressed', String(on));
    audioButton.dataset.state = on ? 'on' : 'off';
    audioButton.querySelector('.audio__text').textContent = on ? '关闭环境音' : '开启环境音';
  });
}

/* ==========================================================================
   HUD
   ========================================================================== */

const hudBar = document.getElementById('hud-bar');
const hudIndex = document.getElementById('hud-index');
const hudLabel = document.getElementById('hud-label');
const SECTION_LABELS = ['序章', '设计', '空气动力学', '灯组', '性能', '车漆', '关键词', '尾声'];

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: 'top 55%',
    end: 'bottom 45%',
    onToggle: (self) => {
      if (!self.isActive) return;
      if (hudIndex) {
        hudIndex.textContent =
          String(i + 1).padStart(2, '0') + ' / ' + String(panels.length).padStart(2, '0');
      }
      if (hudLabel) hudLabel.textContent = SECTION_LABELS[i] || '';
    },
  });
});

/* ==========================================================================
   标签球只在它进入视野时才计算
   ========================================================================== */

let tagsVisible = false;
const tagsPanel = document.getElementById('panel-tags');
if (tagsPanel) {
  ScrollTrigger.create({
    trigger: tagsPanel,
    start: 'top 85%',
    end: 'bottom 15%',
    onToggle: (self) => {
      tagsVisible = self.isActive;
      if (self.isActive) tags.measure();
    },
  });
}

/* ==========================================================================
   主循环
   ========================================================================== */

const idleSway = { t: 0 };
let lastFrameAt = performance.now();
let frame = 0;
const scrollHint = document.querySelector('.scroll-hint');
const finalPos = new THREE.Vector3();
const finalLook = new THREE.Vector3();
const focusPos = new THREE.Vector3();
const focusLook = new THREE.Vector3();

function tick() {
  const now = performance.now();
  const dt = Math.min((now - lastFrameAt) / 1000, 0.05);
  lastFrameAt = now;
  idleSway.t += dt;

  sampleCamera(rig.p);

  /* 竖屏时视野很窄，需要按宽高比把相机拉远，否则车身会溢出画面 */
  const fit = Math.max(1, Math.min(2.3, 1.05 / camera.aspect));
  finalPos.set(
    camLook.x + (camPos.x - camLook.x) * fit,
    camLook.y + (camPos.y - camLook.y) * fit,
    camLook.z + (camPos.z - camLook.z) * fit
  );
  finalLook.copy(camLook);

  /* 点选关键词后的镜头联动：在滚动镜头之上按权重混合过去 */
  if (focusState.w > 0.001) {
    focusPos.set(
      focusState.lx + (focusState.px - focusState.lx) * fit,
      focusState.ly + (focusState.py - focusState.ly) * fit,
      focusState.lz + (focusState.pz - focusState.lz) * fit
    );
    focusLook.set(focusState.lx, focusState.ly, focusState.lz);
    finalPos.lerp(focusPos, focusState.w);
    finalLook.lerp(focusLook, focusState.w);
  }

  const sway = reduceMotion ? 0 : 1;

  /* 阻尼视差：跟随鼠标但不过冲；拖动车身时完全停用，避免两个输入打架 */
  const parallaxOn = orbit.dragging ? 0 : 1;
  pointer.dampedX = approach(pointer.dampedX, pointer.x * parallaxOn, 4, dt);
  pointer.dampedY = approach(pointer.dampedY, pointer.y * parallaxOn, 4, dt);

  /* 车身自转：拖动直接改目标角，松手靠惯性继续转，再缓慢衰减 */
  if (!orbit.dragging) {
    if (!reduceMotion) {
      orbit.velocity *= Math.exp(-dt * 2.1);
      orbit.targetY += orbit.velocity;
    }
  }
  orbit.y = approach(orbit.y, orbit.targetY, 9, dt);
  orbit.lift = approach(orbit.lift, orbit.targetLift, 6, dt);

  camera.position.set(
    finalPos.x + Math.sin(idleSway.t * 0.35) * 0.05 * sway - pointer.dampedX * 0.12,
    finalPos.y + Math.sin(idleSway.t * 0.5) * 0.03 * sway - pointer.dampedY * 0.07,
    finalPos.z + Math.cos(idleSway.t * 0.28) * 0.04 * sway
  );
  finalLook.y += orbit.lift;
  camera.lookAt(finalLook);

  if (car) {
    const idleSpin = reduceMotion ? 0 : Math.sin(idleSway.t * 0.22) * 0.012;
    car.object.rotation.y = orbit.y + idleSpin;
  }

  if (tagsVisible) tags.update(dt, scrollVelocity);

  // 每 8 帧推一次音量目标，避免每帧都往 AudioParam 排调度
  if (frame % 8 === 0) ambient.setIntensity(Math.min(1, Math.abs(scrollVelocity) * 0.02));
  frame++;

  if (hudBar) hudBar.style.transform = 'scaleX(' + rig.p.toFixed(4) + ')';
  if (scrollHint) scrollHint.style.opacity = String(Math.max(0, 1 - rig.p * 10));

  composer.render();
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

/* ==========================================================================
   尺寸变化
   ========================================================================== */

let resizeTimer = 0;
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  bloom.setSize(w, h);
  tags.measure();

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 220);
}

window.addEventListener('resize', resize);

/* ==========================================================================
   开场：进度条读取真实加载进度，车模到位后才交出手
   ========================================================================== */

const intro = document.getElementById('intro');
const introNote = document.querySelector('.intro__note');
const modelNote = document.getElementById('model-note');
const heroPanel = panels[0];
const MIN_INTRO_MS = 900;
let introProgress = 0;
let introDone = false;

function setProgress(value) {
  introProgress = Math.max(introProgress, Math.min(1, value));
  if (introBar) introBar.style.transform = 'scaleX(' + introProgress.toFixed(3) + ')';
}

function finishIntro() {
  if (introDone) return;
  introDone = true;
  revealPanel(heroPanel, false);
  if (!intro) return;
  gsap.to(intro, {
    opacity: 0,
    duration: reduceMotion ? 0 : 0.9,
    delay: reduceMotion ? 0 : 0.15,
    onComplete: () => {
      intro.style.display = 'none';
    },
  });
  gsap.to('.hud, .topbar, .scroll-hint, .drag-hint, .audio', {
    opacity: 1,
    duration: reduceMotion ? 0 : 0.9,
    delay: reduceMotion ? 0 : 0.35,
  });
}

gsap.set(['.hud', '.topbar', '.scroll-hint', '.drag-hint', '.audio'], { opacity: 0 });

async function boot() {
  const startedAt = performance.now();
  setProgress(0.1);

  /* Chrome 禁止 file:// 页面 fetch 本地文件，所以直接双击打开时不去尝试
     加载车模（避免刷一堆报错），改走程序化车身并说明原因。 */
  const canFetchLocal = location.protocol !== 'file:';
  /* 加超时上限：车模请求万一挂住，开场也不能一直卡着 */
  const model = canFetchLocal
    ? await Promise.race([
        loadCarModel(MODEL_URL, (p) => setProgress(0.1 + p * 0.8)),
        new Promise((resolve) => setTimeout(() => resolve(null), 20000)),
      ])
    : null;

  if (model && model.object) {
    car = model;
    scene.add(car.object);
    const paint = document.querySelector('[data-color][aria-pressed="true"]');
    if (paint) setPaint(parseInt(paint.dataset.color.replace('#', ''), 16));
    document.documentElement.dataset.model = 'official';
    document.documentElement.dataset.paint = model.paintName || '';
    if (modelNote) modelNote.textContent = '三维车身使用 assets/su7.glb 模型';
  } else {
    car = buildCar();
    scene.add(car.object);
    document.documentElement.dataset.model = 'procedural';
    if (modelNote) modelNote.textContent = '三维车身由代码程序化生成';
    if (introNote) {
      introNote.textContent = canFetchLocal
        ? '未找到 assets/su7.glb，当前使用程序化车身'
        : '本地文件模式：程序化车身。要看官方车模请双击 start.cmd';
    }
  }

  const elapsed = performance.now() - startedAt;
  if (elapsed < MIN_INTRO_MS) {
    await new Promise((resolve) => setTimeout(resolve, MIN_INTRO_MS - elapsed));
  }
  setProgress(1);
  requestAnimationFrame(() => setTimeout(finishIntro, reduceMotion ? 0 : 220));
}

boot().catch(() => {
  if (!car) {
    car = buildCar();
    scene.add(car.object);
  }
  finishIntro();
});
