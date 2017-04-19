"use strict";
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  entry: [
    "bootstrap-loader",
    "./public/app.js"
  ],
  output: {
    path: `${__dirname}/build`,
    publicPath: `${__dirname}/build/`,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!postcss!sass' },
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "svg-sprite?" + JSON.stringify({
        prefixize: false
      })}

    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
  ,
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};