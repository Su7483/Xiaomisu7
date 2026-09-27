# 部署说明

这是一个纯静态站点，没有后端、没有构建依赖需要跑在服务器上。
**要上传的东西只有一个文件夹：`public/`**（约 6.8MB）。

生成它：

```
双击 deploy.cmd
```

它等价于 `npm run build:site`，会依次做三件事：打包 `src/` 到 `runtime/bundle.js`、
把 Draco 解码器复制到 `runtime/draco/`、再把浏览器真正需要的文件组装到 `public/`。
`node_modules`、`src`、`server.mjs` 这些开发期文件不会进产物。

> **目录名不要改回 `dist`。** Netlify Drop 会把 `dist` / `build` 这类名字当成
> 构建产物目录直接忽略。我们踩过一次：拖进去之后 `dist/` 整个目录没上传，
> 页面上线后取不到 `bundle.js`，开场遮罩永远停在「正在初始化三维影棚」。
> 现在运行时目录叫 `runtime/`，就是为了绕开这个默认忽略规则。

---

## 方案 A：Netlify Drop（最快，不用命令行）

1. 双击 `deploy.cmd`，它会自动打开 `public` 文件夹
2. 打开 <https://app.netlify.com/drop>
3. 把整个 `public` 文件夹拖进去
4. 等几秒，会拿到一个像 `https://xxx-yyy-123.netlify.app` 的地址

要换成好记的域名：站点设置里 Site configuration → Change site name。

## 方案 B：Vercel

本项目根目录已经有 `vercel.json`（声明了构建命令、输出目录和缓存头），所以两种方式都行。

**命令行**（需要先 `npx vercel login` 登录，会打开浏览器授权）：

```
npx vercel --prod
```

**Git 集成**：把仓库推到 GitHub，在 Vercel 里 Import，它会自动读 `vercel.json`。

## 方案 C：GitHub Pages

1. 推到 GitHub 仓库
2. Settings → Pages → Source 选 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`
3. 地址是 `https://<用户名>.github.io/<仓库名>/`

注意：仓库根目录本身就是可用的站点结构，所以不用管 `public/`。
如果更想用 `public/`，就把它的内容拷进 `docs/` 再把 Pages 指到 `/docs`。

## 方案 D：自己的服务器 / 任意静态托管

把 `public/` 里的内容原样放上去即可。只需要确保：

- `.wasm` 返回 `application/wasm`（Draco 解码器要流式编译；主流托管默认就对）
- `.glb` 能被直接 GET（某些对象存储默认不公开，需要单独开）

---

## 部署后建议做两件事

**1. 把分享图的地址换成绝对路径。**
两个页面的 `<head>` 里现在写的是 `<meta property="og:image" content="assets/og.jpg" />`。
微信、Twitter 这类爬虫通常要求绝对地址，拿到域名后改成
`https://你的域名/assets/og.jpg`，分享链接才会有预览图。

**2. 确认缓存头生效。**
`public/_headers`（Netlify）和根目录 `vercel.json`（Vercel）里已经配好：
`runtime/` 下的文件强缓存一年，`assets/` 下缓存一周。
其中 `runtime/bundle.js` 文件名没带哈希，所以以后**重新构建后要让 CDN 失效一次**，
否则老访客可能拿到旧 bundle。想彻底避免这一点，可以把输出文件名改成
`bundle.[hash].js` 并同步改 `experience.html` 里的引用。

---

## 上传前值得想一下

- **车模版权**：`assets/su7.glb` 是从 Sketchfab 下载的第三方模型，公开部署等于公开分发。
  部署前请确认它的授权允许再分发；如果授权不明，可以换成程序化车身（删掉这个文件即可，
  页面会自动回退），或者把站点设为私有/仅自己可见。
- **免责声明**：两个页面底部都已经写明「个人演示用途、非小米官方页面」，公开访问时请保留。
- **不要上传 `node_modules`**：它只用于本地打包。
