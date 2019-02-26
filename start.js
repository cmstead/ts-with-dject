const { execSync, spawn } = require('child_process');

execSync('node ./build.js');
execSync('node ./index.js');