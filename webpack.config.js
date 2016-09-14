var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:1337',
    'webpack/hot/dev-server',
    './src/index',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  node: {
    fs: "empty"
  },
  module: {
    preLoaders: [
        { test: /\.json$/, exclude: /node_modules/, loader: 'json'},
    ],
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};
