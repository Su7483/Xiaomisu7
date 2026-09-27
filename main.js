/* 小米 SU7 标准版 · 极简一屏宣传页
   只做两件事：入场动画 + 鼠标视差。无任何网络请求。 */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     1. 入场动画
     元素默认可见；JS 运行时才加上 .reveal 起始态，因此禁用 JS 也不会白屏。
     ------------------------------------------------------------------ */
  var REVEAL_STEP = 70; // ms
  var revealItems = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

  revealItems.forEach(function (el, index) {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", index * REVEAL_STEP + "ms");
  });

  // 强制一次样式计算，让起始态先落地，过渡才会真正播放
  void document.body.offsetHeight;

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      revealItems.forEach(function (el) {
        el.classList.add("is-in");
      });
    });
  });

  /* ------------------------------------------------------------------
     2. 鼠标视差
     视差写入 --px / --py，由 CSS 的 transform 消费；
     触屏与减少动态效果场景下完全不启用。
     ------------------------------------------------------------------ */
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (reduceMotion || !canHover) return;

  var layers = Array.prototype.slice
    .call(document.querySelectorAll("[data-parallax]"))
    .map(function (el) {
      return { el: el, k: parseFloat(el.getAttribute("data-parallax")) || 1 };
    });

  if (!layers.length) return;

  var MAX_X = 12; // px
  var MAX_Y = 8; // px
  var EASE = 0.08;

  var targetX = 0;
  var targetY = 0;
  var currentX = 0;
  var currentY = 0;
  var running = false;

  function render() {
    currentX += (targetX - currentX) * EASE;
    currentY += (targetY - currentY) * EASE;

    var settledX = Math.abs(targetX - currentX) < 0.0005;
    var settledY = Math.abs(targetY - currentY) < 0.0005;

    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      layer.el.style.setProperty("--px", (-currentX * MAX_X * layer.k).toFixed(2) + "px");
      layer.el.style.setProperty("--py", (-currentY * MAX_Y * layer.k).toFixed(2) + "px");
    }

    if (settledX && settledY) {
      running = false;
      return;
    }
    requestAnimationFrame(render);
  }

  function kick() {
    if (!running) {
      running = true;
      requestAnimationFrame(render);
    }
  }

  window.addEventListener(
    "pointermove",
    function (event) {
      if (event.pointerType !== "mouse") return;
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = (event.clientY / window.innerHeight) * 2 - 1;
      kick();
    },
    { passive: true }
  );

  function recenter() {
    targetX = 0;
    targetY = 0;
    kick();
  }

  document.addEventListener("mouseleave", recenter);
  window.addEventListener("blur", recenter);
})();
