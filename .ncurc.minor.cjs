const patchConfig = require('./.ncurc.patch.cjs');

module.exports = {
  ...patchConfig,
  reject: [...patchConfig.reject, 'typescript'],
  target: 'minor',
};
