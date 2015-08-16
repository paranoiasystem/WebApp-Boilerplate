#! /bin/bash

npm run minifyjs
npm run minifycss

rm -R dist &> /dev/null
mkdir dist
mkdir dist/js
mkdir dist/css

cp index.html dist/index.html
cp js/main.js dist/js/main.js
cp css/main.css dist/css/main.css
cp -R parts dist/parts
cp -R bower_components dist/bower_components

echo ""
echo "What are you waiting for? Distribute your WebApp!"
echo ""