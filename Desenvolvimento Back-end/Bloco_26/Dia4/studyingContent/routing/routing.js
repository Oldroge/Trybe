const express = require('express');
const app = express();

/* Route with path '/', using the GET method;*/
app.get('/', function (req, res) {
  res.send('hello world');
});

/* Route with path '/', using the POST method; */
app.post('/', function (req, res) {
  res.send('hello world');
});

/* Route with path '/', using the PUT method;*/
app.put('/', function (req, res) {
  res.send('hello world');
});

/* Route with path '/', using the DELETE method; */
app.delete('/', function (req, res) {
  res.send('hello world');
});

/* Route with path '/', using the HTTP method; */
app.all('/', function (req, res) {
  res.send('hello world');
});

/* Or can chain the requirements to avoid repeat path */
app
  .route('/')
  .get(function (req, res) {
        // Requirements to route GET '/' are resolveds here!
    res.send('hello world get');
  })
  .post(function (req, res) {
        // Requirements to route POST '/' are resolveds here!
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
