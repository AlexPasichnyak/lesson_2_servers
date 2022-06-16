const net = require('net');

const port = 8124;

const server = net.createServer((connection) => {
  console.log('client connected');
  connection.on('end', () => {
    console.log('client disconnected');
  });

  connection.write('Hello World!\r\n');
  connection.pipe(connection);
});

server.listen(port, () => {
  console.log('server is listening');
});
