@echo off
setlocal
title TIDAL - Local Game
"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0Start-Tidal.ps1"
if errorlevel 1 pause
endlocal
