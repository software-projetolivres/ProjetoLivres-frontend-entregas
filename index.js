const api = require('./api')
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const http = require('http')
const cadastro = require("./routes/cadastro")
const login = require("./routes/login")
const request = require('request')
const url  = 'https://livres-entregas.herokuapp.com/api/entregas'

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile(path.join(__dirname, '../livres-entregas-fe/views/pages', 'index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  /*app.use("/cadastro", cadastro)
  app.use("/login", login)

request({url: url}, (error, response) => {
  const data = response.body    //se for JSON: JSON.parse(response.body)
  console.log(data)
})
