"use strict";

module.exports = {
    entry: ['./src/index.js', './src/style.css'],
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css']
        }]
    }
}
