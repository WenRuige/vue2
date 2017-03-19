/**
 * 主入口文件
 * @email:gewenrui0.0@gmail.com
 * @type {glob}
 */
const glob = require('glob');
const util = require('./util');
const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    //入口文件
    devtool: 'eval-source-map',
    entry: util.getEntries('./src/module/**/*.js'),
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/',
        filename: '[name].[hash:5].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'vue$': 'vue/dist/vue.common.js'

        }
    },
    module: {
        //webpack2.0写法,引用vue-loader
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
        ]
    },
    plugins: [
        //有可能因为webpack版本不兼容导致缺失问题
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['about'],
            filename: '../src/module/about/about.html'
        }),]
}








