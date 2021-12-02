let socket = io.connect();

document.getElementById('toAll').addEventListener('click', function () {
    let message = document.getElementsByName('message')[0].value;
    console.log(message);
    socket.emit('sendToAll', (message));

});
socket.on('displayAllMessage', (message) => {
    document.getElementById('target').innerHTML += '<br>'+message;
});


document.getElementById('toMe').addEventListener('click', function () {
    let message = document.getElementsByName('message')[0].value;
    console.log(message);
    socket.emit('sendToMe', (message));
});

socket.on('displayMyMessage', (message) => {
    document.getElementById('target').innerHTML += '<br>'+message;
});