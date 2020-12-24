var express =  require('express');
var server = express();

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


server.listen(port, function(){
  console.log('Now listening on port...', port);
});
