// require express and setup router
const express = require("express");
const router = express.Router();

// index page
router.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
router.get('/about', function(req, res) {
    res.render('pages/about');
});

// export router
module.exports = router;
