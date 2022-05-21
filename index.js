const api = require('./api')
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
/*const cadastro = require("./routes/cadastro")
const login = require("./routes/login")
const cadastroCompleto = require("./routes/cadastro-completo")
const entregas = require("./routes/entregas")
const minhasEntregas = require("./routes/minhas-entregas")
const entregasInvalidas = require("./routes/entregas-invalidas")*/

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .get('/', (req, res) => res.sendFile('index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

/*app.use("/cadastro", cadastro)
app.use("/login", login)
app.use("/cadastro-completo", cadastroCompleto)
app.use("/entregas", entregas)
app.use("/minhas-entregas", minhasEntregas)
app.use("/entregas-invalidas", entregasInvalidas)*/