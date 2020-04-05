const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function(res) {
  console.log("Server is running on port 3000.");
})

app.get("/", function(req, res) {
  var today = new Date();
  if(today.getDay() === 5 || today.getDay() === 6) {
    res.sendFile(__dirname + "/weekend.html");
  } else {
    res.sendFile(__dirname + "/weekday.html");
  }
})
