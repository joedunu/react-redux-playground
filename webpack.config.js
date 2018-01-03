const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const buildPath = path.resolve(__dirname, 'build')

module.exports = {
  entry: {
    app: ['./app/src/index.js'],
    vendor: ['react', 'react-redux', 'lodash', 'react-router']
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader'
        }
      ],
      exclude: ['/node_modules/', '/app/config', '/e2e/**.*', '/app/src/**/*.spec.js']
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      use: ['file-loader'],
      exclude: '/node_modules/'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 1
          }
        },
        {
          loader: 'resolve-url-loader'
        },
        {
          loader: 'postcss-loader',
          options: {
            config: './app/config/postCss/postcss.config.js'
          }
        }
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './app/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'commons', 'manifest']
    }),
    new CopyWebpackPlugin([
      {
        from: './app/assets/',
        to: './assets/'
      }])
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: {
      index: '/index.html'
    },
    contentBase: buildPath,
    inline: true
  },
  devtool: 'cheap-module-eval-source-map'
}
