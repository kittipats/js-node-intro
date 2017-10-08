import http from 'http';
import socketio from 'socket.io';
import fs from 'fs';

var handler = function(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

io.sockets.on('connection', function (socket) {
    setInterval(function() {
        var timestamp = Date.now();
        console.log('Emitted: ' + timestamp);
        socket.emit('timer', timestamp);
    }, 2000);
    socket.on('submit', function(data) {
        console.log('Submitted: ' + data);
    });
});

app.listen('3021', 'localhost');
console.log('server running....');
