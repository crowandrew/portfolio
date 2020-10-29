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
    const mySql = cloudinary.url("portfolio/Finding-the-largest-tables-on-MySQL_tkxk3e.jpg", {width: 100, crop: "scale"});
    const uiKit = cloudinary.url("portfolio/uikit-285322_tkspl1.png", {width: 100, crop: "scale"});
    const bulma = cloudinary.url("portfolio/bulma-logo-45B5145BF4-seeklogo.com_s3nb58.png", {width: 100, crop: "scale"});
    const sass = cloudinary.url("portfolio/sass_nl3i2z.png", {width: 100, crop: "scale"});
    const react = cloudinary.url("portfolio/react_d8cwlz.png", {width: 100, crop: "scale"});
    const node = cloudinary.url("portfolio/nodejs_b7jznq.png", {width: 100, crop: "scale"});
    const materialize = cloudinary.url("portfolio/materialize_ogfqhg.png", {width: 100, crop: "scale"});
    const mongodb = cloudinary.url("portfolio/mongodb_jkcs8i.png", {width: 100, crop: "scale"});
    const jQuery = cloudinary.url("portfolio/jquery_n6kqj1.png", {width: 100, crop: "scale"});
    const javascript = cloudinary.url("portfolio/javascript_whjmio.png", {width: 100, crop: "scale"});
    const foundation = cloudinary.url("portfolio/foundation_s50pu0.png", {width: 100, crop: "scale"});
    const bootstrap = cloudinary.url("portfolio/bootstrap_fdti8j.png", {width: 100, crop: "scale"});
    const github = cloudinary.url("portfolio/github_gwlmx2.png", {width: 100, crop: "scale"});
    const html = cloudinary.url("portfolio/html5_uz727y.png", {width: 100, crop: "scale"});
    const heroku = cloudinary.url("portfolio/heroku_wvnxc5.png", {width: 100, crop: "scale"});
    const css = cloudinary.url("portfolio/css3_bx81sg.png", {width: 100, crop: "scale"});
    const handlebars = cloudinary.url("portfolio/handlebars-2-1175024_gtmknn.png", {width: 100, crop: "scale"});
    const exps = cloudinary.url("portfolio/Expressjs_pdborp.png", {width: 100, crop: "scale"});
    const ejs = cloudinary.url("portfolio/upk4qehuybgzeck5wkor.png", {width: 100, crop: "scale"});
    const sequelize = cloudinary.url("portfolio/0_rwd6KeolcXgz7zpx_vs29wz.png", {width: 100, crop: "scale"});
    const mongoose = cloudinary.url("portfolio/mongoose_coeoqa.png", {width: 100, crop: "scale"});
    const cloudlogo = cloudinary.url("portfolio/0_hgh5gf.png", {width: 100, crop: "scale"})

    

    res.render('pages/index.ejs',{
        whProject: whaleHunter,
        msProject: moodSing,
        wdProject: weatherDashboard,
        etProject: employeeTracker,
        mySqlLogo: mySql,
        uiKitLogo: uiKit,
        bulmaLogo: bulma,
        sassLogo: sass,
        reactLogo: react,
        nodeLogo: node,
        materializeLogo: materialize,
        mongodbLogo: mongodb,
        jQueryLogo: jQuery,
        javascriptLogo: javascript,
        foundationLogo: foundation,
        bootstrapLogo: bootstrap,
        githubLogo: github,
        htmlLogo: html,
        herokuLogo: heroku,
        cssLogo: css,
        handlebarsLogo: handlebars,
        expressLogo: exps,
        ejsLogo: ejs,
        sequelizeLogo: sequelize,
        mongooseLogo: mongoose,
        cloudinaryLogo: cloudlogo
    });
});

// export router
module.exports = router;
