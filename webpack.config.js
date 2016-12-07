'use strict';

var webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  autoprefixer = require('autoprefixer');;

module.exports = {
  context: __dirname + '/sources',
  entry: {
    index: './index'
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
      }
    ]
  },

  postcss: [autoprefixer({browsers: ['last 2 versions']})],

  plugins: [
    new webpack.NoErrorsPlugin(),

    new ExtractTextPlugin('common.css', {allChunks: true})
  ],

  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    moduleDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js']
  }
};

