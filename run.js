const { execSync } = require('child_process');

(async () => {
	await execSync('git pull')
	await execSync('npm ci')
	await require('./deploy-commands.js')
	await require('./index.js')
})();

