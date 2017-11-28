const path = require('path');
const merge = require('webpack-merge');

const production = require('./prod.config.js');
const development = require('./dev.config.js');

require('babel-polyfill').default;

const TARGET = process.env.npm_lifecycle_event;

const PATHS = require('./paths');

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    bundle: PATHS.app,
    vendor: [
      'react',
      'prop-types'
    ],
    // grey: [PATHS.app+'/containers/Grey'],
    // app: [PATHS.app+'/containers/App'],
    // Authorization: [PATHS.app+'/components/Authorization']
  },

  output: {
    path: PATHS.build,
    filename: '[name].js',
  },


  node: {
    console:true,
    fs: 'empty',
    net: 'empty'
  },

  module: {
    loaders: [
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff2',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      }, {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-otf',
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.jsx{0,1}$/,
        loaders: ['babel-loader','eslint-loader'],
        // include: [
        //   path.resolve(__dirname, '../src')
        // ]
      },
      {
        test: /\.png$/,
        loader: 'file-loader?name=[name].[ext]',
      }, {
        test: /\.jpg$/,
        loader: 'file-loader?name=[name].[ext]',
      }],
  },

};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(development, common);
}
else {
  module.exports = merge(production, common);
}
