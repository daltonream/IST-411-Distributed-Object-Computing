const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs');
let date = new Date();

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', '*');

    const {method, url} = request;
    if (url === "/logdate"){
        fs.appendFile('datelog.txt', date.toString() + '\n ', err => { 
            if(err){
                throw err;
            } else {
                console.log('File Written')
                response.write("Data written"); 
                response.end();
            }
        });
    } else if (url === "/date") {
        fs.readFile('datelog.txt', (err,data) => {
            if(err){
                throw err;
            } else {
                console.log(`Data read: ${data}`);
                response.write(data);
                response.end();
            }
        });
    } else {
        response.statusCode = 404;
        response.write("Resource Not Found")
        response.end();
    }


   
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
});