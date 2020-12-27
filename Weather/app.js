const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var loc = req.body.loc;

  const key = "16b7410dd6e7ee29cce3d3591e3002b9";
  const url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=" + loc + "&appid=" + key;

  http.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>The Temperature in " + loc + " is: " + temp + " degree Celcius</h1>");
      res.write("<h2>The weather is currently " + desc + "</h2>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });

  });
});









app.listen(3000, function() {
  console.log("Sever is running on port 3000");
})
