const express = require("express")
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        res.sendFile('/views/pages/cadastro.html')
    })

module.exports = router