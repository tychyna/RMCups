var express = require('express');

var app = express();

app.use("/public", express.static("public"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views/frontPage.html");
});

app.listen(3000, () => console.log("Server is started"));