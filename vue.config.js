// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// const path = require('path');
var webpack = require('webpack')


module.exports = {
    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    lintOnSave: false,
    // 是否为生产环境构建生成 source map？
    productionSourceMap: true,
    configureWebpack: {
        plugins: [
            //     new OpenBrowserPlugin({ url: 'http://localhost:2001' })，
            // new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),//保存自动刷新页面
            // new webpack.NoEmitOnErrorsPlugin()
        ]
    },
    // webpack-dev-server 相关配置  
    devServer: {
        inline: true,
        open: true, //打开浏览器
        port: 2001,
    },
    // outputDir: path.resolve(__dirname,"dist")
}