const express = require("express");
var bodyParser = require("body-parser");
var compression = require('compression')
const visualRoutes = require("./routes/visuals");
var favicon = require('serve-favicon');
var path = require('path');


const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses if this request header is present
    return false;
  }

  // fallback to standard compression
  return compression.filter(req, res);
};



const app = express();

app.use(compression({
  // filter decides if the response should be compressed or not,
  // based on the `shouldCompress` function above
  filter: shouldCompress,
  // threshold is the byte threshold for the response body size
  // before compression is considered, the default is 1kb
  threshold: 0
}));
app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, 'public', 'images/favicon3.ico')));
app.set("view engine", "ejs");



app.use(express.urlencoded({ extended: true })); //middleware packed up with EXPRESS framework to handle URL data
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(visualRoutes);

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
//app.listen(process.env.PORT || 5000)
app.listen(port, host, function() {
  console.log("Server started at port: ", port);
});

module.exports = app;

//middleware && static files, remember: middleware is any software that deals with the request before it becomes a reponse
