/*
* @Author: laihaibo
* @Date:   2016-08-10 11:05:35
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-08-14 13:30:38
*/

'use strict';
// var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// // var ExtractTextPlugin = require("extract-text-webpack-plugin");

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: 'dist',
//         filename: 'bundle.js',
//     },
//     module: {
//         //加载器配置
//         loaders: [
//             { test: /\.css$/, loader: 'style-loader!css-loader' },
//             { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
//             { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
//         ]
//     }
// };
var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/main.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js',
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    // resolve: {
    //     root: 'E:/github/flux-example/src', //绝对路径
    //     extensions: ['', '.js', '.json', '.scss'],
    //     alias: {
    //         AppStore : 'js/stores/AppStores.js',
    //         ActionType : 'js/actions/ActionType.js',
    //         AppAction : 'js/actions/AppAction.js'
    //     }
    // }
};
