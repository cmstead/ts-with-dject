const { execSync } = require('child_process');

execSync('npm run build-container');
execSync('tsc');