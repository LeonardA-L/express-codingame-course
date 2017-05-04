#!/bin/sh

# cd /project/target
./node_modules/mocha/bin/mocha -R spec $1.js

./bin/server.js &

echo "CG> open --static-dir /project/target/swagger/ /index.html?url=/$1.json"
