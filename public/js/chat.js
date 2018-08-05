$(function(){
  var socket = io();
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'sounds/notification.mp3');

  // capture user submitted message
  $('.chat-form form').submit(function(){
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

  $('#username_input').focusout(() => {
    var changedUsername = $('#username_input').val();
    if (changedUsername.length > 0) {
      socket.emit('change_username', { username: changedUsername });
    }
  });

  // listen to broadcasted msg and view in the chatbox of all users
  socket.on('chat_message', function(data){
    var className = "'chat friend'";
    var username = data.username;
    if (username !== 'Anonymous' && username === $('#username_input').val()) {
      className = "'chat self'";
      username = 'Me';
    }
    var newMessage = "<div class=" + className + ">" +
                        "<div class='username'>" + username + "</div>" +
                        "<p class='chat-message'>" + data.message +
                      "</p></div>";

    $('.chatlogs').prepend(newMessage);
    audioElement.play();
  });

  socket.on('typing', function(data){
    $('.typing-status').html("<p id='feedback_text'><i>" + data.username + " is typing a message..." + "</p></i>");
    // clear 'is typing...' text after 3 seconds
    setTimeout(() => { $('#feedback_text').html('<i>&nbsp;</i>'); }, 3000);
  });
});
