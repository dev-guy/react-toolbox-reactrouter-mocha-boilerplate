// See http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'cheap-module-source-map',
  entry: [
      './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        include: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'test')
        ],
        loader: 'babel',
        query: {
            "presets": ["es2015-loose", "stage-0", "react"],
            "plugins": ["transform-runtime"]
        }       
      },
      { test: /(\.js|\.jsx)$/, exclude: ["node_modules", "build"], loader: 'eslint-loader' },
	  {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
      data: '@import "theme/_config.scss";',
      includePaths: [path.resolve(__dirname, './src')]
  },
  plugins: [
    new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // keeps hashes consistent between compilations
    // new webpack.optimize.OccurenceOrderPlugin(),
    // // minifies your code
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
        warnings: false
    } })  
  ]
};

