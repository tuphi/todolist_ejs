exports.getDate = function() {
  var today = new Date();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = dayList[today.getDay()];

  var options = { weekday: "long", month: "short", day: "numeric"};
  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function() {
  var today = new Date();
  var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = dayList[today.getDay()];

  var options = { weekday: "long" };
  return today.toLocaleDateString("en-US", options);

}
