const path = require('path');
const express = require("express")
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        res.sendFile(path.join(__dirname, 'views/pages', 'login.html'));
        //res.sendFile('/Users/Gabrielle/node-js-getting-started/views/pages/login.html')
    })

module.exports = router