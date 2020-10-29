// require express and setup router
const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary').v2


// index page
router.get('/', function(req, res) {
    const whaleHunter = cloudinary.url("portfolio/Screen_Shot_2020-10-28_at_10.58.02_PM_mgspd1.png", {width: 893, crop: "scale"});
    const moodSing = cloudinary.url("portfolio/Screen_Shot_2020-10-28_at_11.11.07_PM_dwranp.png", {height: 601, crop: "scale"});
    const weatherDashboard = cloudinary.url("portfolio/Screen_Shot_2020-10-28_at_11.18.26_PM_uvkh8k.png", {height: 579, crop: "scale"});
    const employeeTracker = cloudinary.url("portfolio/template-engine-screenshot_ixcdhy.png", {height: 615, crop: "scale"});
    const mySql = cloudinary.url("portfolio/images_wbrzr7.jpg", {width: 200, crop: "scale"});
    const uiKit = cloudinary.url("portfolio/uikit-285322_tkspl1.png", {width: 200, crop: "scale"});
    const bulma = cloudinary.url("portfolio/bulma-logo-45B5145BF4-seeklogo.com_s3nb58.png", {height: 200, crop: "scale"});
    const sass = cloudinary.url("portfolio/sass_nl3i2z.png");
    const react = cloudinary.url("portfolio/react_d8cwlz.png", {width: 200, crop: "scale"});
    const node = cloudinary.url("portfolio/nodejs_b7jznq.png", {width: 200, crop: "scale"});
    const materialize = cloudinary.url("portfolio/materialize_ogfqhg.png", {width: 200, crop: "scale"});
    const mongodb = cloudinary.url("portfolio/mongodb_jkcs8i.png", {width: 200, crop: "scale"});
    const jQuery = cloudinary.url("portfolio/jquery_n6kqj1.png", {width: 200, crop: "scale"});
    const javascript = cloudinary.url("portfolio/javascript_whjmio.png", {height: 200, crop: "scale"});
    const foundation = cloudinary.url("portfolio/foundation_s50pu0.png", {height: 200, crop: "scale"});
    const bootstrap = cloudinary.url("portfolio/bootstrap_fdti8j.png", {height: 200, crop: "scale"});
    const github = cloudinary.url("portfolio/github_gwlmx2.png", {height: 200, crop: "scale"});
    const html = cloudinary.url("portfolio/html5_uz727y.png", {height: 200, crop: "scale"});
    const heroku = cloudinary.image("portfolio/heroku_wvnxc5.png", {width: 200, crop: "scale"});

    

    res.render('pages/index.ejs',{
        whProject: whaleHunter,
        msProject: moodSing,
        wdProject: weatherDashboard,
        etProject: employeeTracker
    });
});

// export router
module.exports = router;
