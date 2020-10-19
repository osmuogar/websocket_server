const httpServer = require('http').createServer();

const io = require('socket.io')(httpServer, { origins: '*:*' });

io.on('connect', socket => {
  console.log('connect');

  // handle the event sent with socket.send()
  socket.on('message', (data) => {
    console.log(data);
  });


  // handle the event sent with socket.emit()
  socket.on('data', (newData) => {
    console.log('New data received: ' + newData);

    if (newData < 50) {
      socket.emit('lowvalue', newData)
    }

  });

});

httpServer.listen(9000, () => {
  console.log('WebSocket server listening at http://localhost:9000');
});
