const express = require('express')
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        res.sendFile('/../views/pages/minhas-entregas.html')
        //'/Users/Gabrielle/node-js-getting-started/views/pages/minhas-entregas.html'
    })

module.exports = router