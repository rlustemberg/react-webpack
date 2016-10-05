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
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: '/public/'
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
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=100000&name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles/[name].css'),
    new CopyWebpackPlugin([
      {
        from: 'index.html'
      }, {
        copyUnmodified: true
      }
    ]),
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          preferPathResolver: 'webpack',
          use: [nib()],
          import: ['~nib/lib/nib/index.styl']
        }
      }
    }),
    new CleanWebpackPlugin(['public'], {
      verbose: true,
      dry: false
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'js/vendors.js'}),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
