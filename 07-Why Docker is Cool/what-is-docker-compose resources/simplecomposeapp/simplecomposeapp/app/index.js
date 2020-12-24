const express =  require('express');
const server = express();

process.on('SIGINT', function(){
  process.exit();
});

server.use(function(req, res, next){
  const {url, method} = req;
  const date = new Date();
  console.log(`${method}: ${url} @ ${date}`);
  next();
});

const port = process.env.PORT || 8080;

server.get('/', function(req, res){
  res.send('Welcome!');
});

server.get('/compose', function(req, res){
  res.send('Docker Compose!');
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
