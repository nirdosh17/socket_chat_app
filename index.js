var app = require('express')();
var http = require('http').Server(app);

// route handler
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// boot app and keep listening to the port
http.listen(3000, function(){
  console.log('Chat app is running!')
  console.log('Listening on port 3000..')
});
