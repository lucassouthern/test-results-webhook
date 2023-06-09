const http = require('http');
const {
  result
} = require('./controllers/resultController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/results' && req.method === 'POST') {
    result(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Route Not Found: Please use the api/results endpoint',
      })
    );
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
