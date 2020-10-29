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

// setup dotenv
require("dotenv").config();

//Setup router
const routes = require("./controllers/portfolio_controller.js");
app.use(routes);

// adding cloudinary
const cloudinary = require('cloudinary').v2

// setting up cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET
  });


// setup port to listen on
const PORT = process.env.PORT || 8080;

// setup listener
app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
  });