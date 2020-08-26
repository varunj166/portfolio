const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        // favicon: './src/imgs/webpack.ico',
        minify: {
          removeAttributeQuotes: false,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/[name].[contentHash].css' }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //4. Extract css into files
            options: {
              publicPath: '../' // override global public path so url's in css output file are correct
            }
          },
          'css-loader', //3. Turns css into commonjs
          'postcss-loader', // 2. for autoprefixer
          'sass-loader' //1. Turns sass into css
        ]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //3. Extract css into files
            options: {
              publicPath: '../' // override global public path so url's in css output file are correct
            }
          },
          'css-loader', //2. Turns css into commonjs
          'postcss-loader' // 1. for autoprefixer
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // add '@babel/preset-react' to presets array (after preset-env) if using react
          }
        }
      }
    ]
  }
});
