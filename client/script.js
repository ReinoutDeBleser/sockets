let socket = io.connect();
let username = sessionStorage.getItem("username");
let password = sessionStorage.getItem("password");
let me = document.getElementById('toMe');
let all = document.getElementById('toAll');

document.getElementById('send').addEventListener('click', function() {
    toWhom()
});

document.addEventListener('keypress', function(key) {
    console.log('enter')
    if (key.key === 'Enter') {
        console.log('enterinif');
    toWhom();
    }
});
//depending on selection to who to send the messages to - excluding shenanigans.
function toWhom() {
    switch(document.querySelector("select").value) {
        case'Send to me':{
            meCheck()
            break;
        }
        case 'Send to all': {
            allCheck()
            break;
        }
        default: {
            allCheck()
        }
    }
}
//eventlisteners for the messages.
function allCheck() {
        let input = document.getElementsByName('message')[0].value
        console.log(input);
        let message = username+" - to All: "+input;
        if (input !== "") {
            socket.emit('sendToAll', (message));
            console.log(message);
        }
}
//sockets for the toAll messages.
//CONSOLE LOGGED: socket 'displayAllMessage'
socket.on('displayAllMessage', (message) => {
    console.log(message);
    document.getElementById('target').innerHTML += '<br>'+message;
});
//socket 'pineapple'
socket.on('pineApple', (otheruser) => {
    let message = otheruser+" likes pineapple on pizza";
    console.log('pineApple');
    socket.emit('sendToAll', (message));
})

//eventlisteners for the self-messages and shenanigans.
function meCheck() {
        let input = document.getElementsByName('message')[0].value
        console.log(input);
        if (input === 'bingo'){
            console.log(username);
            socket.emit('fMaximus', (username));
        }
        else {
            let message = username+" - to Me:"+input;
            if (input !== "") {
                socket.emit('sendToMe', (message));
                console.log(message);
            }
        }
}

// function receiverCheck() {
//     let input = document.getElementsByName('message')[0].value
//     console.log(input);
//     let message =  ;
//     let messageline =  "from "+username+": - to "+input+ ":"+message;
//     if (input !== "") {
//         socket.emit('sendToOne', (messageline));
//         console.log("private message"+messageline);
//     }
// }
//sockets for the self-messages and shenanigans.
socket.on('displayMyMessage', (message) => {
    document.getElementById('target').innerHTML += '<br>'+message;
});
//chatupdate when user enters.
socket.on("displayHiMessage", (user) => {
    document.getElementById('target').innerHTML += "<br>"+user+ " has entered the chat";
});
//chatupdate when user leaves.
socket.on("displayByeMessage", (user) => {
    document.getElementById('target').innerHTML += "<br>"+user+ " has left the chat";
});

// CONSOLE LOGGED: dynamic display of active users.
socket.on('displayUsers', (usernames) => {

    console.log(usernames);
    document.getElementById('users').innerHTML = usernames.join('<br/>');
});
//update on active users when users leaves.
socket.on('goneUser', (usernames) => {
    document.getElementById('users').innerHTML = usernames.join('<br/>');
});
//function that triggers when user leaves the session.
function goneUser(username) {
    socket.emit('goneUser', (username));
    console.log(username+" has left the chat")
}

// if previous username found in session it's messaged how you're seen.
if (username !== null) {
    alert("Your username is "+username);
    console.log(username);
    socket.emit('addUser', (username));
}

//can't enter without username. it is also stored in the session.
while (username == null){
    username = prompt("What's your username for this session?");
    // password = prompt("What do you want your password to be?");

    sessionStorage.setItem("username", username);
    // sessionStorage.setItem("password", password);
    socket.emit('addUser', (username),/* (password),*/ );
}