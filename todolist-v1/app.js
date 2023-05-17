const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
const localhost = 3000;

//
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname)); // initializing app to use home directory access

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

app.get("/", function (req, res) {
  var today = new Date();
  var dayName = days[today.getDay()];
  // let todayDate = new Date().toISOString().slice(0, 10);
  console.log(today.toLocaleString("en-US", options));

  if (today.getDay() === 6 || today.getDay() === 0) {
    // day = "weekend";
    res.render("list", { kindOfDay: dayName });
  } else {
    // day = "weekday";
    res.render("list", { kindOfDay: dayName });
  }
});

app.listen(localhost, function () {
  console.log(`Server listening on port : ${localhost}`);
});
