const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index',
  },
  output: {
    path: './build',
    filename: '[hash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      baseUrl: '/',
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      },
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        drop_console: true,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin(
      {
        NODE_ENV: JSON.stringify('production'),
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
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname,
    }],
  },
};
