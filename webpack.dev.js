const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  entry: './example/main.jsx',
  output: {
    publicPath: '/example/',
    filename: 'app.bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    stats: 'minimal',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./example/index.html'),
    }),
  ],
});
