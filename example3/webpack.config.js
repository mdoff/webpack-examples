"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/index.jsx', './src/css/style.css'],
    output: {
        path: __dirname + '/dist',
        filename: './bundle.js'
    },
    module: {
        loaders: [
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
          },
          {
            test: /\.jsx$/,
            loader: 'babel',
              exclude: /node_modules/,
                query: {
                  presets: ['react', 'es2015']
                }
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
                template: './src/index.html'
            })
    ]
};
