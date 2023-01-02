const cpx = require('cpx');
const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.resolve(__dirname, 'dist'))) {
  fs.mkdirSync(path.resolve(__dirname, 'dist'));
}

if (!fs.existsSync(path.resolve(__dirname, 'dist/docs'))) {
  fs.mkdirSync(path.resolve(__dirname, 'dist/docs'));
}

cpx.copy(path.resolve(__dirname, '../storybook/dist/**'), path.resolve(__dirname, 'dist'));
cpx.copy(path.resolve(__dirname, '../docusaurus/build/**'), path.resolve(__dirname, 'dist', 'docs'));
