var ExtractTextPlugin = require('extract-text-webpack-plugin')
var atImport = require('postcss-import')
var customProperties = require('postcss-custom-properties')
var modularScale = require('postcss-modular-scale')
var colorScale = require('postcss-color-scale')
var autoprefixer = require('autoprefixer')

module.exports = {
  context: __dirname,
  entry: __dirname + '/src/entry.js',
  output: {
    filename: 'index.js',
    path: __dirname
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel-loader'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }
    ],
  },
  postcss: [
    atImport({
      path: ['node_modules', './src']
    }),
    colorScale(),
    modularScale(),
    customProperties(),
    autoprefixer(),
  ],
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
}
