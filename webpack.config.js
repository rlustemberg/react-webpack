const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const stylusLoader = ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader!stylus-loader'})
const nib = require('nib')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },
  context: path.join(__dirname, 'src'),
  devtool: 'eval-source-map',
  entry: {
    app: ['./index.jsx'],
    vendor: ['material-design-lite/material']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel',
        query: {
          presets: [
            'es2015', 'stage-2', 'react'
          ],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }, {
        test: /\.styl$/,
        loader: stylusLoader
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([
      {
        from: 'index.html'
      }, {
        copyUnmodified: true
      }
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          preferPathResolver: 'webpack',
          use: [nib()],
          import: ['~nib/lib/nib/index.styl']
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
