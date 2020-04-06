const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set up ejs
app.set("view engine", "ejs");

// Global variables
var tasks = [];

app.listen(3000, function(res) {
  console.log("Server is running on port 3000.");
})

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  var today = new Date();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = dayList[today.getDay()];

  var options = { weekday: "long", month: "short", day: "numeric"};
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day, taskItems: tasks});
})

app.post("/", function(req, res) {
  var task = req.body.newTask;
  tasks.push(task);
  res.redirect("/");
})
