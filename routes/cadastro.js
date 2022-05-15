const express = require("express")
let router = express.Router()

router
    .route("/")
    .get( (req, res) =>{
        res.sendFile(path.join(__dirname, '../node-js-getting-started/views/pages', 'cadastro.html'))
    })

module.exports = router