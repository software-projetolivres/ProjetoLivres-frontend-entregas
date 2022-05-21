const express = require("express")
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        //res.sendFile('/../views/pages/login.html')
        res.sendFile('/Users/Gabrielle/node-js-getting-started/views/pages/login.html')
    })

module.exports = router