@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo   重新打包三维体验页 (src/experience.js -^> runtime/bundle.js)
echo.
call node scripts\copy-vendor.mjs
if errorlevel 1 (
  echo.
  echo   复制 Draco 解码器失败。
  pause
  exit /b 1
)
call npx esbuild src/experience.js --bundle --format=iife --target=es2020 --minify --legal-comments=none --define:import.meta.url=__SU7_BASE__ --outfile=runtime/bundle.js
if errorlevel 1 (
  echo.
  echo   打包失败，请检查上面的报错。
  pause
  exit /b 1
)
echo.
echo   打包完成。双击 experience.html 查看。
echo.
pause
