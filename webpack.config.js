// 由于环境是在node环境下导出的所以需要使用commjs的方法

const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',//入口文件
  output: {//出口，编译后文件存放的位置
    path: path.resolve("./dist"), //必须配置一个绝对路径，表示放置打包后所在的文件夹，默认是dist
    filename: "script/bundle.js",//打包后js文件的名称
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"//html存放地址
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    // 读到什么类型的文件，交给什么插件处理
    rules: [
      { test: /.ts$/, loader: "ts-loader" }
    ]
  },
  resolve: {
    // 当没有后缀名时，先找TS文件，再找JS文件
    extensions: [".ts", ".js"]
  }
}