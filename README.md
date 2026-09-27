# 小米 SU7 标准版 · 宣传网页

两个独立页面，一套素材：

| 页面 | 说明 |
| --- | --- |
| [`index.html`](index.html) | 极简一屏版。零依赖，双击即可打开 |
| [`experience.html`](experience.html) | 三维滚动体验版。Three.js + GSAP + Lenis |

两个页面互相有入口，顶部都有返回链接。

## 三维体验版做了什么

- **滚动驱动镜头**：8 个章节，滚动进度驱动 7 个机位的相机曲线
- **官方车模**：加载 `assets/su7.glb`，自动轴向归一、按 4997mm 等比缩放、自动识别车漆材质
- **可拖动车身**：拖动绕 Y 轴旋转，带惯性，双击回正
- **关键词联动**：点任意关键词，镜头平滑飞到车上对应部位
- **程序化回退**：没有车模文件时自动改用代码生成的车身，功能不中断

## 本地运行

### 只想看看

双击 `index.html`（极简版）或 `experience.html`（三维版）。

⚠️ 直接双击打开三维版会退回程序化车身——Chrome 禁止 `file://` 页面读取本地文件，车模加载不了。

### 要看官方车模

双击 **`start.cmd`**，它会启动一个零依赖的本地服务并打开浏览器。

## 构建

```bash
npm install
npm run build:site     # 打包 + 组装出可部署的 public/
```

或者双击 `build.cmd`（只重新打包 bundle）/ `deploy.cmd`（打包并组装 `public/`）。

## 部署

详见 [DEPLOY.md](DEPLOY.md)。一句话版本：把 `public/` 拖到 Netlify Drop，
或者把仓库连到 Vercel / 开 GitHub Pages。

## 目录结构

```
index.html / styles.css / main.js      极简一屏版
experience.html / experience.css       三维体验版的页面与样式
src/                                   三维体验版的源码
  experience.js                        主程序：场景、相机编排、交互
  lib/car.js                           程序化车身（没有官方车模时的回退）
  lib/model.js                         官方车模加载与材质归一
  lib/studio.js                        影棚灯光与环境反射
  lib/tagcloud.js                      关键词球
  lib/audio.js                         Web Audio 环境音
runtime/bundle.js                      打包产物（已提交，Pages 需要）
runtime/draco/                         Draco 解码器
assets/su7.glb                         车模
assets/og.jpg                          分享预览图
server.mjs / start.cmd                 本地预览服务
scripts/                               构建脚本
```

## 已知事项

- **车模版权**：`assets/su7.glb` 是第三方模型，公开仓库等于公开分发，请确认授权；
  不确定的话删掉该文件，页面会自动回退到程序化车身。
- **参数口径**：页面上的续航 / 加速 / 风阻等数字按标准版填写，**未经官方核实**，上正式场合前请对照官方公布值。
- **`runtime/` 不要改名回 `dist`**：Netlify Drop 会把 `dist` 当构建产物目录忽略，导致线上取不到脚本。
- 本项目是个人技术研究与审美练习，**非小米官方页面**。
