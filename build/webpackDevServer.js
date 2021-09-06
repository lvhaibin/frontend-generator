const webpack = require('webpack');
const config = require('./webpack.config');
const devServer = require('webpack-dev-server');

new devServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
  }).listen(3000, 'localhost', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
  });
