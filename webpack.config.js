const autoprefixer = require('autoprefixer')
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './dev/js/index'
  ],
  output: {
    path: path.join(__dirname, 'prod'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'dev/js')
      },
      {
        test: /\.s?css$/,
        loader: 'style!css!sass'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [path.join(__dirname, './prod')]
  }
};