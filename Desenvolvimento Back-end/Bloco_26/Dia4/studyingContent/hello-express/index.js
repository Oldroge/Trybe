// Store the express in the variable
const express = require('express');

// Name the variable which store express as app is convetion and a good practice!
const app = express(); // 1

// using the app variable which store express, calling the GET method which a request were received in the /hello path the function handleHelloWorldRequest should be call;
// When treating a request with GET method in the path /hello, send the status HTTP 200 which means ok and the message "Hello World!";
app.get('/hello', handleHelloWorldRequest); // 2

// here calling the listen method which creates a server HTTP by request at door 3001; 
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}
