const http = require('http');

const options = {
  hostname: '127.0.0.1',
  port: process.env.PORT || 3000,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log('Status: ' + res.statusCode);
  console.log('Status: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', chunk => {
    console.log('Response: ', chunk);
  });

  res.on('end', () => {
    if (!res.complete) console.error('The connection was terminated...');

    console.log('Response ended!!!');
  });
});

req.end();
