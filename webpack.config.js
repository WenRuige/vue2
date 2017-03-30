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
    //防止打包文件过大
    // externals:{
    //     'vue':'window.vue'
    // },
    // 使用sourcemap的话 300kB -> 1.1 Mb
    //devtool: 'eval-source-map',
    entry: util.getEntries('./src/module/**/*.js'),
    output: {
        path: __dirname + '/dist',
        //实际webpack-dev-sever 打包Js 访问的位置
        publicPath: '/dist',
        //filename: '[name].[hash:5].js' hash 表示对文件进行hash化
        filename: '[name].js'
    },
    //定义解析模块时路径的配置
    resolve: {
        //require时省略参数的扩展名
        extensions: ['.js', '.vue', '.json'],
        //创建别名
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '/src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            //引入vue.common js
            'vue$': 'vue/dist/vue.common.js'

        }
    },
    module: {
        //webpack2.0写法,引用vue-loader
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js/,
                use: ['babel-loader'],
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }

        ]
    },
    plugins: [
        //有可能因为webpack版本不兼容导致缺失问题
        new HtmlWebpackPlugin({
            inject: true,
            title: '关于我们',
            //加上一个hash值,防缓存
            hash: true,
            chunks: ['about', 'common'],
            //公共模板文件  TODO:此处如果使用公共模板的话需要引入webpack公共的方法
            template: './template.ejs',
            //生成文件的名称
            filename: '../src/module/about/about.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            title: '首页',
            //加上一个hash值,防缓存
            hash: true,
            chunks: ['index', 'common'],
            //公共模板文件
            template: './template.ejs',
            //生成文件的名称
            filename: '../src/module/index/index.html'
        }),
        //公共类库单独打包
        new webpack.optimize.CommonsChunkPlugin('common'),
        //打包代码
        //new webpack.optimize.UglifyJsPlugin(),
        //增加copyRight
        new webpack.BannerPlugin("gewenrui's webpack"),
    ]
}








