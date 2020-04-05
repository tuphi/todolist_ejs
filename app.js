const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set up ejs
app.set("view engine", "ejs");

app.listen(3000, function(res) {
  console.log("Server is running on port 3000.");
})

app.get("/", function(req, res) {
  var today = new Date();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = dayList[today.getDay()];

  res.render("list", {kindOfDay: day});
})
