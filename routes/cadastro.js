const express = require('express')
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        res.sendFile('/Users/Gabrielle/node-js-getting-started/views/pages/cadastro.html')
    })

module.exports = router