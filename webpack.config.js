const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const plusConfig = require('./plus.config')

// 构建库相关的配置
let libraryConf = {}
if (plusConfig.appType === 'library') {
  libraryConf = {
    filename: `${ plusConfig.appName }.js`,
    libraryTarget: 'umd',
    globalObject: 'this',
    library: plusConfig.appName
  }
}

module.exports = {
  mode: plusConfig.NODE_ENV,
  entry: {
    app: plusConfig.languageType === 'ts'
      ? './src/index.ts'
      : './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, plusConfig.outDir),
    filename: '[name].bundle.[contenthash].js',
    ...libraryConf
  },
  devtool: plusConfig.NODE_ENV === 'development' ? 'eval-source-map' : 'hidden-source-map',
  devServer: {
    contentBase: plusConfig.outDir,
    hot: true
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Plus',
      filename: 'index.html',
      template: path.resolve(__dirname, './public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}