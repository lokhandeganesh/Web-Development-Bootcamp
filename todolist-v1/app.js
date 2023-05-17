const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
const localhost = 3000;

//
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname)); // initializing app to use home directory access

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

var today = new Date();
var day = today.toLocaleString("en-US", options);
var addToTodo = "";
var items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {
  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  addToTodo = req.body.addToTodo;
  // console.log(addToTodo);

  items.push(addToTodo);

  res.redirect("/");
});

app.listen(localhost, function () {
  console.log(`Server listening on port : ${localhost}`);
});
