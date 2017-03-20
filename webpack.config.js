/**
 * 主入口文件
 * @email:gewenrui0.0@gmail.com
 * @type {glob}
 */
const glob = require('glob');
const util = require('./util');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    //入口文件
    devtool: 'eval-source-map',
    entry: util.getEntries('./src/module/**/*.js'),
    output: {
        path: __dirname + '/dist',
        //不能存放变量?
        //publicPath: '/name.html',
        filename: '[name].[hash:5].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            //引入common js
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
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ]
    },
    plugins: [
        //有可能因为webpack版本不兼容导致缺失问题
        new HtmlWebpackPlugin({
            inject: true,
            title: 'this is a title test',
            //加上一个hash值,防缓存
            hash: true,
            chunks: ['about'],
            //公共模板文件
            template: './template.html',
            filename: '../src/module/about/about.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            title: 'this is a title test',
            //加上一个hash值,防缓存
            hash: true,
            chunks: ['index'],
            //公共模板文件
            template: './template.html',
            filename: '../src/module/index/index.html'
        }),
    ]
}








