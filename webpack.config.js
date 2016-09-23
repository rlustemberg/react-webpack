const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const stylusLoader = ExtractTextPlugin.extract({
  fallbackLoader: 'style-loader',
  loader: 'css-loader!stylus-loader'
})

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },
  context: path.join(__dirname, 'src'),
  entry: {
    app: ['./components/index.jsx']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /(\.js|.jsx)$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-2', 'react']
      }
    }, {
      test: /\.styl$/,
      loader: stylusLoader
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loaders: ['file-loader']
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([{
      from: 'index.html'
    }, {
      copyUnmodified: true
    }])
  ]
}
