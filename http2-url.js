const http2 = require('http2');
const fs = require('fs');

var options = {
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
};

require('http2').createServer(options, function(request, response) {
  response.end('Hello world!');
}).listen(8080);