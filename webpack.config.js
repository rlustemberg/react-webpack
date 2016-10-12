const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
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
    vendors: ['jquery/dist/jquery.min.js', 'bootstrap/dist/js/bootstrap.min.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/[name].js',
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
        test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=100000&name=./img/[name].[ext]'
      }, {
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
        loader: 'url?limit=100000&name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles/[name].css'),
    new CopyWebpackPlugin([
      {
        from: 'index.html'
      }, {
        from: path.join(__dirname, 'src', 'img'),
        to: 'img'
      }, {
        from: path.join(__dirname, 'node_modules', 'bootstrap-styl', 'fonts'),
        to: path.join(__dirname, 'src', 'fonts')
      }, {
        from: path.join(__dirname, 'node_modules', 'bootstrap-styl', 'fonts'),
        to: 'fonts'
      }, {
        from: path.join(__dirname, 'node_modules', 'font-awesome-stylus', 'fonts'),
        to: path.join(__dirname, 'src', 'fonts')
      }, {
        from: path.join(__dirname, 'node_modules', 'font-awesome-stylus', 'fonts'),
        to: 'fonts'
      }, {
        copyUnmodified: true
      }
    ]),
    new webpack.ProvidePlugin({jQuery: 'jquery', $: 'jquery', jquery: 'jquery'}),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          preferPathResolver: 'webpack',
          use: [nib()],
          import: ['~nib/lib/nib/index.styl']
        }
      }
    }),
    new CleanWebpackPlugin(['build'], {
      verbose: true,
      dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'js/vendors.js'}),
    new webpack.HotModuleReplacementPlugin()
  ]
}
