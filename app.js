const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set up ejs
app.set("view engine", "ejs");

// Global variables
var tasks = [];
var workTasks = [];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.listen(3000, function(res) {
  console.log("Server is running on port 3000.");
})

app.get("/", function(req, res) {
  var today = new Date();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = dayList[today.getDay()];

  var options = { weekday: "long", month: "short", day: "numeric"};
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {listTitle: day, taskItems: tasks});
})

app.post("/", function(req, res) {

  console.log(req.body);

  var task = req.body.newTask;


  if(req.body.list === "Work") {
    workTasks.push(task);
    res.redirect("/work");
  } else {
    tasks.push(task);
    res.redirect("/");
  }

})

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work", taskItems:workTasks});
})

app.get("/about", function(req, res) {
  res.render("about");
})
