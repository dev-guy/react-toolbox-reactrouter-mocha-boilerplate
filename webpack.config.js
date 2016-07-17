// See http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  // devtool: 'inline-source-map',

  devtool: 'eval',
  entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
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
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
// { test: /(\.js|\.jsx)$/, exclude: ["node_modules", "build"], loader: 'eslint-loader' },
	  {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
      }
    ]
  },
  toolbox: {
    theme: path.join(__dirname, '/src/toolbox-theme.scss')
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
