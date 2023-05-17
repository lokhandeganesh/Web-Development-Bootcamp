const express = require("express");
const bodyParser = require("body-parser");
const date = require(`${__dirname}/date.js`); // importing date.js

const app = express();
app.set("view engine", "ejs");
const localhost = 3000;

//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // initializing app to use home directory access

// Declaration of Variables

// Declaring list related variables
// let item = "";
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
//

app.get("/", function (req, res) {
  // imported from date.js module
  let day = date.getDay();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  // console.log(req.body);
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.listen(localhost, function () {
  console.log(`Server listening on port : ${localhost}`);
});
