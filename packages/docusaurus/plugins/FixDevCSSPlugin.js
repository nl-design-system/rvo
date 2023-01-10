module.exports = function () {
  return {
    name: 'fix-dev-css-plugin',
    configureWebpack(config) {
      const plugin = config.plugins.find((plugin) => plugin.constructor.name === 'MiniCssExtractPlugin');
      plugin.options.filename = 'assets/css/[name].[contenthash:8].css';
    },
  };
};
