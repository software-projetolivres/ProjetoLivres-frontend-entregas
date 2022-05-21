const express = require('express')
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        res.sendFile('/views/pages/cadastro-completo.html')
        //'/Users/Gabrielle/node-js-getting-started/views/pages/cadastro-completo.html'
    })

module.exports = router