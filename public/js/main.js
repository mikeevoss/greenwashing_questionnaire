var socket = io();

var realistisch =0;
var intellectueel = 0;
var artistiek = 0;
var sociaal = 0;
var ondernemend = 0;
var conventioneel = 0;
var http = new XMLHttpRequest();


function buttonPress(message, filename = 'result') {
  socket.emit('button_press', { message, filename });
}

$(document).ready(function() {    $('#mybutton1').delay(15000).fadeIn(1000);
});

function roodLicht() {
    http.open('GET', "http://cmd.camp:12345/send/5TLsVj8P/222");
    http.send();
    console.log(http);
}

function realUp (){
  realistisch =+ 1 ;
  console.log("eenomhoog");
  console.log(realistisch);
}

