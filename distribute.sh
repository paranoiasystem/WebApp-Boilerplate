#! /bin/bash

echo ""
echo "Use gulp for compile your file"
echo ""
npm run minifyjs
npm run minifycss

echo ""
echo "Make your /dist directory"
rm -R dist &> /dev/null
mkdir dist
mkdir dist/js
mkdir dist/css

echo "Prepare your /dist directory"
echo ""
cp index.html dist/index.html
cp js/main.js dist/js/main.js
cp css/main.css dist/css/main.css
cp -R parts dist/parts
cp -R bower_components dist/bower_components

echo "What are you waiting for? Distribute your WebApp!"
echo ""