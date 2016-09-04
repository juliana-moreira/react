var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var fs = require('fs');
var COMMENTS_FILE = 'comments.json';
var bodyParser = require('webpack-body-parser');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  setup: function(app) {
      // Here you can access the Express app object and add your own custom middleware to it.
      // For example, to define custom handlers for some paths:
      app.post('/comments.json', function(req, res) {
        console.log(">>>>>>>>>>> ", req);
        console.log(">>>>>>>>>>> ", bodyParser.body);
        // console.log(">>>>>>>>>>> ", res);
        // res.json({ custom: 'response1' });

        // fs.writeFile('comments.json', 'Hello World!', function (err) {
        //   if (err) return console.log(err);
        //   console.log('Hello World > helloworld.txt');
        // });

        return;

      });
    },
});

server.listen(1337, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:1337');
});
