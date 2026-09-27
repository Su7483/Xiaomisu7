@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo   启动本地预览服务（加载官方车模必须走 http，Chrome 禁止 file:// 读取本地文件）
echo.
node server.mjs --open
pause
