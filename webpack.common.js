// const path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/js/index.js']
    // other: './src/other.js' // additional files are listed in the entry object after main (won't be bundled with main)
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true // can use ${require('path/to/partial.html')} syntax inside html to import partials
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            limit: 0,
            outputPath: 'imgs' // both the file location inside 'dist' as well as the path given to html-loader
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'fonts' // both the file location inside 'dist' as well as the path given to html-loader
          }
        }
      },
      {
        test: /\.(pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            limit: 0,
            outputPath: 'misc' // both the file location inside 'dist' as well as the path given to html-loader
          }
        }
      }
    ]
  }
};
