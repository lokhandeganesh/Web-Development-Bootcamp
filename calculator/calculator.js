const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/", function (req, res) {
  /*
  // instid using full path use (__dirname)
  console.log(__dirname);
  */
  res.sendFile(`${__dirname}/index.html`);
});

// Calculation using values from calculator.html
app.post("/calculator", function (req, res) {
  // res.send("Thanks for posting data");
  // console.log(req.body);

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send(`The result of the calculation is ${result}`);
});

app.get("/bmi_calculator", function (req, res) {
  /*
  // instead of using full path, use (__dirname)
  console.log(__dirname);
  */
  res.sendFile(`${__dirname}/bmi_calculator.html`);
});

// BMI Calculation using values from bmi_calculator.html
app.post("/bmi", function (req, res) {
  var weight = Number(req.body.inp_weight);
  var height = Number(req.body.inp_height);

  var bmi = (weight / Math.pow(height, 2)).toFixed(2);
  res.send(`Your BMI is ${bmi}`);
});

// Hosting app on server using port
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
