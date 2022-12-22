const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const fs = require('fs');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const componentScssPaths = glob.sync('./*/!(dist|node_modules)/**/*.scss');
const componentEntries = componentScssPaths.reduce((componentEntries, componentScssPath) => {
  const componentName = componentScssPath.match(/\/(.+?)\//)[1];
  componentEntries[componentName] = componentScssPath;
  return componentEntries;
}, {});

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: componentEntries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]/[name].css', chunkFilename: '[id].css' }),
    new EventHooksPlugin({
      afterEmit: () => {
        /// Remove JS files after emit
        const jsFiles = fs.readdirSync(path.resolve(__dirname, 'dist')).filter((file) => /[.]js$/.test(file));
        jsFiles.forEach((jsFile) => fs.unlinkSync(path.resolve(__dirname, 'dist', jsFile)));
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
