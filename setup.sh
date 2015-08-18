#! /bin/bash

echo ""
echo "Remove what you not need"
echo ""
rm -f README.md &> /dev/null
rm -f LICENSE &> /dev/null
rm -f .gitignore &> /dev/null
rm -f setup.bat &> /dev/null
rm -f distribute.bat &> /dev/null
rm -Rf .git &> /dev/null

echo "Launch npm install"
echo ""
npm install &> /dev/null

echo "Launch npm run bower"
echo ""
npm run bower &> /dev/null
npm run minifyjs &> /dev/null
npm run minifycss &> /dev/null


echo "What are you waiting for? Work on your WebApp!"
echo ""

sleep 10

echo "Launch npm run default"
echo ""
npm run default
