const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    writeToDisk: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
      // favicon: 'src/imgs/webpack.ico' // Update this with your own favicon
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'postcss-loader', // 1. (a) for autoprefixer
          'sass-loader' //1. Turns sass into css
        ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'postcss-loader' // 1. for autoprefixer
        ]
      }
    ]
  }
});
