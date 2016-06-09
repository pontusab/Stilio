const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:5555',
    'webpack/hot/dev-server',
    './src/index',
  ],
  output: {
    path: __dirname,
    filename: '[hash].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      baseUrl: '',
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(
      {
        NODE_ENV: JSON.stringify('development'),
      }
    ),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve('./src'),
  },
  module: {
    loaders: [{
      test: /\.(css|scss)$/,
      loader: 'style!css!resolve-url!sass?sourceMap',
    }, {
      test: /\.(html)$/,
      loader: 'html',
    }, {
      test: /\.(otf|svg|ttf|woff|woff2|eot|png|jpg|gif)(((\?[^.])*)|(\?v=[0-9]\.[0-9]\.[0-9]))?$/,
      loader: 'file-loader',
    }, {
      test: /\.(jsx?)$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname,
    }],
  },
};
