var path = require('path')
var webpack = require('webpack')

// webpack 配置文件 打包css js template器将一切前端任务打包
// 插件化机制 启动服务器
module.exports = {
    entry: './src/main.js', //单点入口
    output: { //出口
        path:path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                //一个组件一个文件
                test: /\.vue$/,
                loader: 'vue-loader',
                
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    //logo.png?版本号
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
}