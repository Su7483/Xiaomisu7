@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo   正在构建可部署的静态站点...
echo.

call npm run build:site
if errorlevel 1 (
  echo.
  echo   构建失败，请检查上面的报错。
  pause
  exit /b 1
)

echo   上传方式（任选其一）：
echo.
echo   A. 最快：打开 https://app.netlify.com/drop ，把 public 文件夹拖进去
echo   B. Vercel：在本目录执行  npx vercel --prod
echo   C. GitHub：推到仓库后，Settings -^> Pages 里选 main 分支根目录
echo.

start "" "%~dp0public"
pause
