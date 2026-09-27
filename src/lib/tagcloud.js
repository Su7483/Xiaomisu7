/* ---------------------------------------------------------------------------
   标签球。

   自己写而不是引入 TagCloud.js，因为需要两件外部库给不了的事：
     1) 把自转速度直接挂到滚动速度上（滚得猛就转得快，松手缓慢衰减）；
     2) 点某个词就把球转到那个词正对镜头，并回调去驱动相机。

   性能上注意两点：容器尺寸只在 resize / 进入视口时测一次（每帧调用
   getBoundingClientRect 会强制重排，是卡顿主因）；模糊只在深度跨越阈值
   时切换，不逐帧写 filter。
   --------------------------------------------------------------------------- */

const BASE_SPIN = 0.16; // rad/s，静置时的缓慢自转
const SPIN_DAMPING = 3.2; // 滚动带动的角速度衰减速度
const FOCUS_RATE = 4.6; // 聚焦时的收敛速度
const BLUR_DEPTH = 0.38;

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
const approach = (current, target, rate, dt) =>
  current + (target - current) * (1 - Math.exp(-rate * dt));

/* 选到与当前角度最近的等价目标，避免为了对齐多转一整圈 */
function nearestAngle(current, target) {
  const twoPi = Math.PI * 2;
  return target + Math.round((current - target) / twoPi) * twoPi;
}

export function createTagSphere(container, labels, options = {}) {
  const onSelect = options.onSelect || (() => {});

  const items = labels.map((label) => {
    const el = document.createElement('span');
    el.className = 'tag';
    el.textContent = label;
    container.appendChild(el);
    return el;
  });

  const n = items.length;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const seed = items.map((_, i) => {
    const y = n === 1 ? 0 : 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });

  let angleX = -0.2;
  let angleY = 0;
  let spin = 0;
  let focusX = null;
  let focusY = null;
  let activeIndex = -1;

  let width = 1;
  let height = 1;
  let radiusPx = 200;
  const blurred = new Array(n).fill(false);

  function measure() {
    const box = container.getBoundingClientRect();
    width = Math.max(1, box.width);
    height = Math.max(1, box.height);
    radiusPx = Math.max(70, Math.min(width, height) * 0.34);
  }

  function render() {
    const cx = width / 2;
    const cy = height / 2;
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);

    for (let i = 0; i < n; i++) {
      const p = seed[i];
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.x * sinY + p.z * cosY;
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      const depth = (z2 + 1) / 2; // 0 最远、1 最近
      const el = items[i];
      el.style.transform =
        'translate3d(' +
        (cx + x1 * radiusPx).toFixed(2) +
        'px,' +
        (cy + y2 * radiusPx).toFixed(2) +
        'px,0) translate(-50%,-50%) scale(' +
        (0.55 + depth * 0.75).toFixed(3) +
        ')';
      el.style.opacity = (0.18 + depth * 0.82).toFixed(3);
      el.style.zIndex = String(Math.round(depth * 100));

      const wantBlur = depth < BLUR_DEPTH;
      if (wantBlur !== blurred[i]) {
        blurred[i] = wantBlur;
        el.classList.toggle('is-far', wantBlur);
      }
    }
  }

  function update(dt, scrollVelocity) {
    spin += scrollVelocity * 0.00035;
    spin *= Math.exp(-dt * SPIN_DAMPING);

    if (focusX !== null) {
      angleY = approach(angleY, nearestAngle(angleY, focusY), FOCUS_RATE, dt);
      angleX = approach(angleX, focusX, FOCUS_RATE, dt);
    } else {
      angleY += (BASE_SPIN + spin) * dt;
    }

    render();
  }

  function focus(index) {
    const p = seed[index];
    if (!p) return;
    const r = Math.sqrt(p.x * p.x + p.z * p.z);
    focusY = Math.atan2(p.x, p.z);
    focusX = Math.atan2(p.y, r);
  }

  function release() {
    focusX = null;
    focusY = null;
  }

  /* ---------- 指针交互：区分「拖动转向」和「点选标签」 ---------- */

  let dragging = false;
  let moved = 0;
  let pressedIndex = -1;
  let lastPointer = null;

  container.addEventListener('pointerdown', (event) => {
    dragging = true;
    moved = 0;
    lastPointer = { x: event.clientX, y: event.clientY };
    const tag = event.target && event.target.closest ? event.target.closest('.tag') : null;
    pressedIndex = tag ? items.indexOf(tag) : -1;
    if (container.setPointerCapture) container.setPointerCapture(event.pointerId);
  });

  container.addEventListener('pointermove', (event) => {
    if (!dragging || !lastPointer) return;
    const dx = event.clientX - lastPointer.x;
    const dy = event.clientY - lastPointer.y;
    moved += Math.abs(dx) + Math.abs(dy);
    if (moved > 4) release(); // 手动转向时放弃聚焦目标
    angleY += dx * 0.006;
    angleX = clamp(angleX + dy * 0.006, -1.2, 1.2);
    lastPointer = { x: event.clientX, y: event.clientY };
  });

  function endPointer() {
    const index = moved < 6 ? pressedIndex : -1;
    dragging = false;
    lastPointer = null;
    pressedIndex = -1;
    if (index >= 0) {
      activeIndex = index;
      items.forEach((el, i) => el.classList.toggle('is-active', i === index));
      focus(index);
      onSelect(index);
    }
  }

  container.addEventListener('pointerup', endPointer);
  container.addEventListener('pointercancel', () => {
    dragging = false;
    lastPointer = null;
    pressedIndex = -1;
  });

  measure();
  render();

  return {
    update,
    measure,
    focus,
    release,
    clearActive() {
      activeIndex = -1;
      items.forEach((el) => el.classList.remove('is-active'));
    },
    get active() {
      return activeIndex;
    },
  };
}
