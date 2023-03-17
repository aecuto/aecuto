@echo off
REM Forge requires a configured set of both JVM and program arguments.
REM Add custom JVM arguments to the user_jvm_args.txt
REM Add custom program arguments {such as nogui} to this file in the next line before the %* or
REM  pass them to this script directly

taskkill /f /im ngrok.exe 

START /b cmd /c ngrok tcp -config=./ngrok.yml 25565

java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.19.2-43.1.1/win_args.txt %* nogui

taskkill /f /im ngrok.exe 

pause


