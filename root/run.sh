#!/bin/sh

# cd /project/target
./node_modules/mocha/bin/mocha -R spec $1.js

chmod +x ./bin/server.js

echo "CG> open --port=3000 /swagger/$1.html"

node ./bin/server.js
