
// 1. Import built-in and custom modules
const http = require('http');
const addNumbers = require('./math');

// 2. Create the server logic
const server = http.createServer((req, res) => {
    const result = addNumbers(110, 5);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello! The sum of 100 and 5 is ${result}`);
});

// 3. Tell the server to listen on a port
server.listen(5000, 'localhost', () => {
    console.log('Server is running at http://localhost:5000/');
});