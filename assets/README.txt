这个目录放两类素材。

一、官方车模（experience.html 的三维车身）

  文件名必须是：su7.glb
  放进来就会被自动接管，没有这个文件则回退到代码程序化生成的车身。

  加载后程序会自动做这些事：
    - 把最长的那个轴转到 X 轴（本项目约定车长沿 X、车宽沿 Z）
    - 等比缩放到 4997mm 车长，底面贴地、水平居中，所以相机机位不用改
    - 按三角面数找出面积最大的非透明材质当车漆，跳过名字里带
      glass / wheel / tire / light 之类的材质

  支持 Draco 压缩（解码器已随 build.cmd 复制到 runtime/draco/）。
  如果车头朝向反了，打开 src/lib/model.js，把 MODEL_YAW_OFFSET 改成 Math.PI。
  如果换色换错了材质，说明车漆识别选错，改 NON_PAINT 这个正则即可。

  ⚠ 加载车模必须走本地服务：Chrome 禁止 file:// 页面读取本地文件。
    双击 start.cmd 启动服务后打开 http://localhost:5173/experience.html
    直接双击 experience.html 也能看，但会退回程序化车身。

二、首屏车图（index.html 的备用照片位）

  推荐文件名：su7-hero.jpg
  建议尺寸：宽 2000px 以上，比例接近 16:9 或更宽，背景为深色（便于与页面融合）。
  替换步骤见 index.html 里 <img id="hero-photo"> 上方的注释。

三、当前车模的来源（2026-09-27 换入）

  文件：assets/su7.glb —— 5.16 MB，17.0 万三角面，Draco 压缩，贴图内嵌。

  来源：GitHub 上的复刻项目 Ming411/xiaomi_su7。
        这套模型在多个 SU7 复刻仓库里出现过（材质名都是 Car_body /
        M_ChePai / M_Wheel_ALL 这一套），血统可以追溯到 gamemcu.com/su7
        一类的第三方复刻 Demo —— 它不是小米官方发布的车模。

  ⚠ 该仓库没有声明开源授权，法律上默认是「保留所有权利」。
    个人、非商业的自娱页面风险较低；一旦要商用或公开分发，建议换成
    授权明确的车模（例如 Sketchfab 上 CC-BY 的 SU7 模型，需要署名），
    或者直接向小米取得素材授权。

  比例核对：模型自带包围盒 5237 × 1465 × 2200（单位 mm），
            真车 4997 × 1455 × 1963 mm，差异主要来自后视镜与尾部造型。
