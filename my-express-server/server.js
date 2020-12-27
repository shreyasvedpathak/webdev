const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, World</h1>");
});

app.get("/contact", function(req, res){
  res.send("<h1>shreyasvedpathak@gmail.com</h1>");
});

app.get("/about", function(req, res){
  res.send("<h2>hello, i am shreyas vedpathak.</h2>");
});

app.get("/hobbies", function(req, res){
  res.send("<h2>gaming, coding</h2>");
});

app.listen(3000, function(){
  console.log('Server started on port 3000');
});
