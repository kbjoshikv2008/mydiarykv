@echo off
title Teacher's Digital Diary Server
cd /d "%~dp0"
echo =========================================================
echo   Starting Local HTTP Server for Teacher's Digital Diary
echo =========================================================
echo.
node server.js
pause
