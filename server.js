// load express
const express = require('express');
const app = express();

// set ejs engine
app.set('view engine', 'ejs');

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static(__dirname + "/public"));

//Setup router
const routes = require("./controllers/portfolio_controller.js");
app.use(routes);

// setup port to listen on
const PORT = process.env.PORT || 8080;

// setup listener
app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
  });