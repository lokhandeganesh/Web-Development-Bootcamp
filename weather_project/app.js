const express = require("express");
const bodyParser = require("body-parser");

const https = require("https");
// const https = require("http")

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// initialising home page
app.get("/", function (req, res) {
  // res.send("Server is set and ready for launch");

  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function (req, res) {
  console.log(req.body.cityName);

  const url = "https://api.sampleapis.com/futurama/info";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const futurama = JSON.parse(data);

      var futuramaData = {
        yearsAired: futurama[0].yearsAired,
        creators: futurama[0].creators,
        name: futurama[0].creators[0].name,
        synopsis: futurama[0].synopsis,
      };

      /*
      for (let index = 0; index < 2; index++) {
        console.log(futurama[0].creators[index].name);
      }
      */

      // let yearsAired = document.getElementById("yearsAired");

      res.write(`<p>Years Aired ${futuramaData.yearsAired}</p>`);
      res.write(`<h1>${futuramaData.name}</h1>`);
      res.write(`<p>${futuramaData.synopsis}</p>`);

      res.send();
    });
  });
});

// running application on server using port value
app.listen(3000, function () {
  console.log(`Server is running on port ${port}`);
});
