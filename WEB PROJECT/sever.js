const app=require('express')
const http = require('http');
const addNumbers = require('./math');



app.get('/',(req,res)=>{
let arr=[1,2,3,4,5]


res.render("index",{arr})




})








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