const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/contact", function (req, res) {
  res.send("Contact me page");
});
app.listen(3000, function () {
  console.log("Server Started on port 3000");
});
