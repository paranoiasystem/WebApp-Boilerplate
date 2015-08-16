@ECHO OFF
ECHO Use gulp for compile your file
CALL npm run minifyjs
CALL npm run minifycss
ECHO Make your /dist directory
RMDIR /Q /S dist
MKDIR dist
MKDIR dist\js
MKDIR dist\css
ECHO Prepare your /dist directory
CP index.html dist\index.html
CP js\main.js dist\js\main.js
CP css\main.css dist\css\main.css
CP -R parts dist\parts
CP -R bower_components dist\bower_components
ECHO What are you waiting for? Distribute your WebApp!
