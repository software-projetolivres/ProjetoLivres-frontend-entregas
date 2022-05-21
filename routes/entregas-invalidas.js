const express = require('express')
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        res.sendFile('/views/pages/entregas-invalidas.html')
        //'/Users/Gabrielle/node-js-getting-started/views/pages/entregas-invalidas.html'
    })

module.exports = router