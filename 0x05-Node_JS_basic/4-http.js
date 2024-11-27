const app = require('http');

app.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
}).listen(1245);

module.exports = app;
