const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "developmentDB",
  password: "pocrapostgres",
  port: 5434,
});

// pool.connect((err) => {
//   if (err) {
//     console.error("connection error", err.stack);
//   } else {
//     console.log("connected");
//   }
// });

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("home");

  //
  pool.query("SELECT * FROM users ORDER BY id ASC", (err, results) => {
    if (!err) {
      // res.status(200).json(results.rows);
      console.log(results.rows);
    }
  });
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
