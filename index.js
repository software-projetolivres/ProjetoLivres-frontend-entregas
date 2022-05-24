const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors');
const PORT = process.env.PORT || 5000

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .get('/', (req, res) => res.sendFile(__dirname + '/views/pages/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  .use(cors())

app.get('/login', (req, res) => res.sendFile(__dirname + '/views/pages/login.html'))
app.get('/cadastro', (req, res) => res.sendFile(__dirname + '/views/pages/cadastro.html'))
app.get('/cadastro-completo', (req, res) => res.sendFile(__dirname + '/views/pages/cadastro-completo.html'))
app.get('/entregas', (req, res) => res.sendFile(__dirname + '/views/pages/entregas.html'))
app.get('/entregas-invalidas', (req, res) => res.sendFile(__dirname + '/views/pages/entregas-invalidas.html'))
app.get('/minhas-entregas', (req, res) => res.sendFile(__dirname + '/views/pages/minhas-entregas.html'))