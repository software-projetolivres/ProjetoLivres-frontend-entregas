const api = require('./api')
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const cadastro = require("./routes/cadastro")
const login = require("./routes/login")
const cadastroCompleto = require("./routes/cadastro-completo")

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile(path.join(__dirname, '../livres-entregas-fe/views/pages', 'index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.use("/cadastro", cadastro)
app.use("/login", login)
app.use("/cadastro-completo", cadastroCompleto)