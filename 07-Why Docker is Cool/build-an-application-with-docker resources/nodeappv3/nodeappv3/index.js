var express =  require('express');
var server = express();
var data = require('./data.json');


process.on('SIGINT', function(){
  process.exit();
});

server.use(function(req, res, next){
  var {url, method} = req;
  var date = new Date();
  console.log(`${method}: ${url} @ ${date}`);
  next();
});

var port = process.env.PORT || 8080;

server.get('/', function(req, res){
  res.send('Welcome!');
});

server.get('/users/', function(req, res){
	res.json(data);
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
