const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    mode : 'development',
    // devtool : 'eval',
    devServer : {
        contentBase : './dist',
        hot : true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ]
});