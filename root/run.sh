#!/bin/sh

# cd /project/target
./node_modules/mocha/bin/mocha -R spec $1.js

chmod +x ./bin/server.js

node ./bin/server.js &

echo "CG> open --static-dir /project/target/swagger/ /index.html"
