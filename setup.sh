#! /bin/bash

rm -f README.md &> /dev/null
rm -f LICENSE &> /dev/null
npm install &> /dev/null
npm run bower &> /dev/null

echo ""
echo "What are you waiting for? Work on your WebApp!"
echo ""

sleep 10

npm run default