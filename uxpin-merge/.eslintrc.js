const path = require('path');

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: path.resolve(__dirname),
    sourceType: 'module',
  },
};
