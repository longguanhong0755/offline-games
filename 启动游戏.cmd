@echo off
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 goto usepy
where python >nul 2>nul
if %errorlevel%==0 goto usepython
echo Python 3 not found.
pause
exit /b 1
:usepy
py -3 -B server.py
goto :eof
:usepython
python -B server.py
