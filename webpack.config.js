"use strict";

var webpack = require('webpack'),
  path = require('path'),
  extractTextplugin = require('extract-text-webpack-plugin'),
  autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve(__dirname, './sources'),
  entry: './index',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },

  devtool: 'source-map',

  watch: true,

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015'
      },

      {
        test: /\.less$/,
        loader: extractTextplugin.extract('style', 'css!postcss!less')
      },

      
    ]
  },

  postcss: [autoprefixer()],

  plugins: [
    new webpack.NoErrorsPlugin(),

    new extractTextplugin('style.css')
  ]
};