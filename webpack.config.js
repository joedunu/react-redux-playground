const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
    },
    {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      use: ['file-loader'],
      exclude: '/node_modules/'
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: [{
          loader: 'style-loader'
        }],
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader?config=./config/postCss/postcss.config.js'
          }
        ]
      }
                )
    }
    ]
  },
  plugins: [
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
    })
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
