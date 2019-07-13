var express = require('express');
var app = express();
var http = require('http').Server(app);

// initialize new instance of socket passing the http server object
var io = require('socket.io')(http);

app.use(express.static('public'));

// route handler
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// listen on connection event for incoming sockets
io.on('connection', function(socket){
  var address = socket.handshake.address;
  console.log('New connection from ' + address);

  // set default username
  socket.username = "Anonymous";

  socket.on('change_username', function(data){
    socket.username = data.username;
  });

  socket.on('typing', function(data){
    io.emit('typing', { username: socket.username });
  });

  socket.on('chat_message', function(data){
    // broadcast message received from one user to everyone
    io.emit('chat_message', { username: socket.username, message: data.message });
  });
});

// boot app and keep listening to the port
http.listen(3000, function(){
  console.log('Chat app is running!');
  console.log('Listening on port 3000..');
});
