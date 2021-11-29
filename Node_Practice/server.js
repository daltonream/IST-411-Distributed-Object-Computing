const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', '*');

    const {method, url} = request;

    response.write("Hello from Node.");
    response.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
});