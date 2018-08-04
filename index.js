var app = require('express')();
var http = require('http').Server(app);

// initialize new instance of socket passing the http server object
var io = require('socket.io')(http);

// route handler
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// listen on connection event for incoming sockets
io.on('connection', function(socket){
  console.log('User connnected');
  socket.on('chat_message', function(msg){
    // broadcast message received from one user to everyone
    io.emit('chat_message', msg);
  });
});

// boot app and keep listening to the port
http.listen(3000, function(){
  console.log('Chat app is running!');
  console.log('Listening on port 3000..');
});
