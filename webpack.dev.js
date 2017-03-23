var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {

    publicPath: '/' // Same as `output.publicPath` in most cases.
}));
var hotMiddleware = require('webpack-hot-middleware')(compiler)
app.listen(8082, function () {
    console.log("Listening on port 8082!");
});