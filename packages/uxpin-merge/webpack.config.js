/* eslint-env node */
const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, '../'),
      path.resolve(__dirname, '../node_modules'),
    ],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve('ts-loader', { paths: ['./node_modules/@uxpin/merge-cli'] }),
      },
      {
        loader: require.resolve('babel-loader', { paths: ['./node_modules/@uxpin/merge-cli'] }),
        test: /\.js?$/,
        exclude: /node_modules/,
        options: {
          presets: [
            require.resolve('@babel/preset-env', { paths: ['./node_modules/@uxpin/merge-cli'] }),
            require.resolve('@babel/preset-react', { paths: ['./node_modules/@uxpin/merge-cli'] }),
          ],
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'resolve-url-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
