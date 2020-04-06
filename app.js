const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Set up ejs
app.set("view engine", "ejs");

app.listen(3000, function(res) {
  console.log("Server is running on port 3000.");
})

app.get("/", function(req, res) {
  var today = new Date();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = dayList[today.getDay()];

  var options = { weekday: "long", month: "short", day: "numeric"};
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day});
})

app.post("/", function(req, res) {
  console.log(req.body.newTask);
})
