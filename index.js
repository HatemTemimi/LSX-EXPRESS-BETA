const express = require("express");
var bodyParser = require("body-parser");
var compression = require('compression')
const visualRoutes = require("./src/routes/visuals");
var favicon = require('serve-favicon');
var path = require('path');


const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false;
  }
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
app.set('views', __dirname + '/src/views');
app.set("view engine", "ejs");



app.use(express.urlencoded({ extended: true })); //middleware packed up with EXPRESS framework to handle URL data


app.use(express.json());

app.use(visualRoutes);

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
//app.listen(process.env.PORT || 5000)
app.listen(port, host, function() {

  console.log("messing with vercel");
  console.log("Server started at port: ", port);
});

module.exports = app;
