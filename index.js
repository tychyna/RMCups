var express = require('express');

var app = express();

app.use("/public", express.static("public"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/frontPage.html");
});

app.get('/allCups', function (req, res) {
  res.sendFile(__dirname + "/public/allCups.html");
});

app.get('/singleCup', function (req, res) {
  res.sendFile(__dirname + "/public/singleCup.html");
});

app.get('/signUp', function (req, res) {
  res.sendFile(__dirname + "/public/signUp.html");
});

app.listen(3000, () => console.log("Server is started"));