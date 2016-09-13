var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('app'));
app.use('/node_modules', express.static('node_modules'));
app.use('/dist', express.static('dist'));


var usersFilePath = path.join(__dirname, '/api/userInfo.json');


app.get('/userInfo', function (req, res) {
  var readable = fs.createReadStream(usersFilePath);
  readable.pipe(res);
});

app.get('/menu', function (req, res) {
  var readable = fs.createReadStream(path.join(__dirname, '/api/menu.json'));
  readable.pipe(res);
});

app.post('/login', function (req, res) {
  if (req.body.username == '500') {
    res.status(500).send('Server down!');
  }
  else if (req.body.username == '401') {
    res.status(401).send('UnauthorizedS!');
  }
  else {
    var readable = fs.createReadStream(usersFilePath);
    readable.pipe(res);
  }
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});