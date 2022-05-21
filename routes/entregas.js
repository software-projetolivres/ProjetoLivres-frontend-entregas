const express = require('express')
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        //res.sendFile('/../views/pages/entregas.html')
        res.sendFile('/Users/Gabrielle/node-js-getting-started/views/pages/entregas.html')
    })

module.exports = router