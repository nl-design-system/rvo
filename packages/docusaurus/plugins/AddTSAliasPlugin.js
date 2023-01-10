const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function () {
  return {
    name: 'add-ts-alias-plugin',
    configureWebpack() {
      return {
        resolve: {
          plugins: [new TsconfigPathsPlugin()],
        },
      };
    },
  };
};
