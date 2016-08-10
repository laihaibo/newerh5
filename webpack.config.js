/*
* @Author: laihaibo
* @Date:   2016-08-10 11:05:35
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-08-10 13:05:31
*/

'use strict';
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'dist',
        filename: 'bundle.js',
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    }
};
