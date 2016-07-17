const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const path = require('path');

const server =
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
});

server.app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './www/index.html'));
});

server.listen(8080, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8080');
});

