@ECHO OFF
ECHO Remove what you not need
del /F /Q README.md
del /F /Q LICENSE
del /F /Q .gitignore
del /F /Q setup.sh
del /F /Q distribute.sh
RMDIR /Q /S .git
ECHO Launch npm install
CALL npm install
ECHO Launch npm run bower and compile demo app
CALL npm run bower
CALL npm run minifyjs
CALL npm run minifycss
ECHO What are you waiting for? Work on your WebApp!
CALL npm run default
