$(function(){
  var socket = io();
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'sounds/notification.mp3');

  // capture user submitted message
  $('form').submit(function(){
    var input = $('#msg_input').val();
    if (input.length > 0){
      socket.emit('chat_message', { message: $('#msg_input').val() });
      $('#msg_input').val('');
    }
    return false;
  });

  $('#msg_input').bind("keypress", () => {
    socket.emit('typing');
  });

  $('#username_form').submit(function(){
    var changedUsername = $('#username_input').val();
    socket.emit('change_username', { username: changedUsername });
  });

  // listen to broadcasted msg and view in the chatbox of all users
  socket.on('chat_message', function(data){
    $('#messages').prepend($('<li>').html('<b>' + data.username + '</b>' + ': ' + data.message));
    audioElement.play();
  });

  socket.on('typing', function(data){
    $('#typing_status').html("<p><i>" + data.username + " is typing a message..." + "</p></i>");
  });

});
