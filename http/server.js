const http = require('http');

const PORT = process.env.PORT || 3000;

const geojson = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Point',
    coordinates: [
      32.26655066013336,
      48.5095538999371
    ]
  }
};

const server = http.createServer();
server.on('request', (req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('Welcome to <a href="/something">our http-server</a>');
      break;

    case '/geojson':
      res.writeHead(200, { 'Content-Type': 'text/json' });
      res.write(JSON.stringify(geojson));
      res.end();
      break;

    case '/something':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hi, noname!');
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Error 404: Not found!');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('listening port ', PORT);
});
