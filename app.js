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
  var day = "";
  if(today.getDay() === 0 || today.getDay() === 6) {
    day = "Weekend";
  } else {
    day = "Weekday";
  }
  res.render("list", {kindOfDay: day});
})
