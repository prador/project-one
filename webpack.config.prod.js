const autoprefixer = require('autoprefixer')
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('css/App.css');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './dev/js/index'
    ],
    output: {
        path: path.join(__dirname, 'prod'),
        filename: '/js/bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        extractCSS,
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'dev/js')
            },
            {
                test: /\.scss$/i,
                loader: extractCSS.extract(['css', 'sass'])
            }
        ]
    }
};