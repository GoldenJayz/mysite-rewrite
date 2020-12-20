const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://lisa-bot-discord.glitch.me/"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/puckdata.html");
});

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/eggs.html");
});

app.get("/github", (request, response) => {
  response.redirect("https://github.com/GoldenJayz");
});

app.get("/puck", (request, response) => {
  response.redirect("https://puckpanel.glitch.me/");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/home/puck", (request, response) => {
  response.redirect("https://github.com/GoldenJayz/puck");
});

app.get("/home/music", (request, response) => {
  response.redirect("https://github.com/GoldenJayz/puck2");
});

app.get("/home/logs", (request, response) => {
  response.sendFile(__dirname + "/views/logs.html");
});

app.get("/api/bY5wd6iPS2jxubp0", (request, response) => {
  response.sendFile(__dirname + "/views/api.html");
});

app.get("/test", (request, response) => {
  response.sendFile(__dirname + "/views/eggs.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
