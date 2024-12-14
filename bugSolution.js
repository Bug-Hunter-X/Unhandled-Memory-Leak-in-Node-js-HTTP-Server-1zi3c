const http = require('http');

const server = http.createServer((req, res) => {
  // Ensure the connection is closed after the response
  res.on('finish', () => {
    res.end();
  });
  //Handle errors
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 500;
    res.end();
  });
  res.on('error', (err) => {
    console.error(err);
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
