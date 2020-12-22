const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const plusConfig = require('./plus.config')

module.exports = {
  mode: plusConfig.NODE_ENV,
  entry: {
    app: plusConfig.languageType === 'ts'
      ? './src/index.ts'
      : './src/index.js'
  },
  output: {
    filename: '[name].bundle.[contenthash].js',
    path: path.resolve(__dirname, plusConfig.outDir)
  },
  devtool: plusConfig.NODE_ENV === 'development' ? 'eval-source-map' : 'hidden-source-map',
  devServer: {
    contentBase: plusConfig.outDir,
    hot: true
  },
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
      title: 'Webpack Starter Plus'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}