const cpx = require('cpx');
const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.resolve(__dirname, 'docs'))) {
  fs.mkdirSync(path.resolve(__dirname, 'docs'));
}

if (!fs.existsSync(path.resolve(__dirname, 'tmp'))) {
  fs.mkdirSync(path.resolve(__dirname, 'tmp'));
}

if (process.argv.some((arg) => arg === '--watch')) {
  console.info('Watching files...');
  cpx.watch(path.resolve(__dirname, '../../documentation/website/**/**'), 'docs/tmp');
} else {
  cpx.copy(path.resolve(__dirname, '../../documentation/website/**/**'), 'docs/tmp');
}
