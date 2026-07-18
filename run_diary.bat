@echo off
title Teacher's Digital Diary Server
cd /d "%~dp0"
echo =========================================================
echo   Starting Local HTTP Server for Teacher's Digital Diary
echo =========================================================
echo.
echo Launching diary portal in your browser...
start http://localhost:8080/
echo.
echo Press Ctrl+C inside this window to stop the server at any time.
echo.
node server.js
pause
