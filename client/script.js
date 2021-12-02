let socket = io.connect();
//eventlisteners and sockets for the messages.
document.getElementById('toAll').addEventListener('click', function () {
    let input = document.getElementsByName('message')[0].value
    console.log(input);
    let message = username+" - to All: "+input;

    if (input !== "") {
        socket.emit('sendToAll', (message));
        console.log(message);
    }
});

socket.on('displayAllMessage', (message) => {
    document.getElementById('target').innerHTML += '<br>'+message;
});

document.getElementById('toMe').addEventListener('click', function () {
    let input = document.getElementsByName('message')[0].value
    let message = username+" - to Me:"+input;
    console.log(input);
    if (input !== "") {
        socket.emit('sendToMe', (message));
        console.log(message);
    }
});

socket.on('displayMyMessage', (message) => {
    document.getElementById('target').innerHTML += '<br>'+message;
});


socket.on("displayByeMessage", (user) => {
    document.getElementById('target').innerHTML += "<br>"+user+ " has left the chat";
});


let username = sessionStorage.getItem("username");
// if previous username found it's messaged how you're seen.
if (username !== null) {
    alert("Your username is "+username);
    console.log(username);
    socket.emit('addUser', (username));
}
//can't enter without username. it is also stored in the session.
while (username == null){
    username = prompt("What's your username for this session?");
    sessionStorage.setItem("username", username);
    socket.emit('addUser', (username));
}
//todo: fix dynamic display of active users.
socket.on('displayUsers', (users) => {
    console.log(users);
    document.getElementById('users').innerHTML = users.join('<br/>');
});

socket.on('goneUser', (users) => {
    document.getElementById('users').innerHTML = users.join('<br/>');
});

function goneUser(username) {
    socket.emit('goneUser', (username));
    console.log(username+" has left the chat")
}
