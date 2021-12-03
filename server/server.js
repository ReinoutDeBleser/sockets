const express = require('express');
const http = require('http');
const app = express();
const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
const server = http.createServer(app);
const io = require('socket.io')(server);
let counter = 0
let users = [];
let usernames = [];
const User = require('./user.js')
io.on('connection', (socket) => {
    console.log(counter+' someone connected');
    counter++;
    socket.on('sendToAll', (message) =>{
        io.emit("displayAllMessage", (message));
    });
    socket.on('sendToMe', (message) =>{
        socket.emit("displayMyMessage", (message));
    });
    // socket.on('sendToOne', (message) =>{
    //     socket.emit("displayMyMessage", (message));
    // });
    socket.on('addUser', (username) =>{
        //oop attempts
        let user = new User(username, socket.id);
        users.push(user);
        usernames.push(user.username)
        console.log(users)
        io.emit("displayHiMessage", (user.username));
        io.emit("displayUsers", (usernames));

        //oop attempts
        // io.emit("displayHiMessage", (user[0]));
        // io.emit("displayUsers", (users.user[0]));
    });
    socket.on('goneUser', (username) =>{
        usernames.splice((users).indexOf(username), 1);
        io.emit("displayByeMessage", (username));
        io.emit("displayUsers", (usernames));
    });
    socket.on('fMaximus', (username) => {
        //huidige gebruiker filteren uit de actieve gebruikers, random andere gebruiker returnen.
        let otherUsers = usernames.filter((otherUser) => (otherUser !== username));
        console.log(otherUsers);
        let randomNumber = Math.floor(Math.random()* otherUsers.length)
        let randomOtherUser = otherUsers[randomNumber];
        socket.emit('pineApple', (randomOtherUser))
        }
    )
});

server.listen(port = 8080, () =>{
    console.log("server running on "+port);
});


