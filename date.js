module.exports = {getDate, getDay};

function getDate() {
  var today = new Date();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = dayList[today.getDay()];

  var options = { weekday: "long", month: "short", day: "numeric"};
  var day = today.toLocaleDateString("en-US", options);

  return day;
}

function getDay() {
  var today = new Date();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = dayList[today.getDay()];

  var options = { weekday: "long" };
  var day = today.toLocaleDateString("en-US", options);

  return day;
}
