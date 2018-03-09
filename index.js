var express = require('express');
var app = express();

var requestTime1 = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime1);

app.get('/', function (req, res) {
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});

app.listen(3000);