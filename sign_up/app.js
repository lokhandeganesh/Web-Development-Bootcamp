const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const client = require("@mailchimp/mailchimp_marketing");

const app = express();
const port = 3000;

const API_KEY = "d4a03b094d68e7b322e94c677bfa190c-us21";
const dc = "us21";
const list_id = "e63f7cdc31";

//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // initializing app to use home directory access

//
app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/signup.html`); // we can send file from directory as __dirname points to home directory
});

app.get("/signup.html", function (req, res) {
  res.sendFile(`signup.html`); // as we already initilized the app to use home directory so no need to mention __dirname/fileName
});

client.setConfig({
  apiKey: API_KEY,
  server: dc,
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const run = async () => {
    const response = await client.lists.addListMember(list_id, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        EMAIL: email,
        COMPANY: "Apple",
        ADDRESS: {
          addr1: "test Address",
          city: "Mumbai",
          state: "Mh",
          zip: "12345",
        },
      },
    });

    if (response) {
      res.sendFile(`${__dirname}/success.html`);
    } else {
      res.sendFile(`${__dirname}/failure.html`);
    }
  };

  run();
});

app.post("/Success", function (req, res) {
  res.redirect("/");
});

app.get("/success.html", function (req, res) {
  res.sendFile(`success.html`);
});

app.get("/failure.html", function (req, res) {
  res.sendFile(`failure.html`);
});

app.listen(3000, function () {
  console.log(`Server listening on ${port}`);
});
