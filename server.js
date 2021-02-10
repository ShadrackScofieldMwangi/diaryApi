//Requiring the modules
var express = require('express');
var app = express();

//Route handling
app.get('/', function (req, res) {
  res.send('Hello world!');
});

//server setup
app.listen(3000, () => {
  console.log('diary RESTful API is on port: 3000' );
});
