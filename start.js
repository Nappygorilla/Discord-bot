const http = require('node:http');

const port = Number(process.env.PORT || 10000);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ service: 'NoContext Discord Bot', status: 'online' }));
}).listen(port, '0.0.0.0', () => {
  console.log(`Render health server listening on ${port}`);
  require('./runtime/discord/src/index.js');
});
