const express = require("express");
var bodyParser = require("body-parser");

const visualRoutes = require("./routes/visuals");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true })); //middleware packed up with EXPRESS framework to handle URL data
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(visualRoutes);
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
//app.listen(process.env.PORT || 5000)
app.listen(port, host, function() {
  console.log("Server started.......");
});

//middleware && static files, remember: middleware is any software that deals with the request before it becomes a reponse
