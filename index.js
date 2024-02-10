const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contatos', (req, res) => {
    res.send('contatos')
})

app.post("/contatos", (req, res) => {
   let contato = {
    nome: req.body.nome,
    email: req.body.email,
    fone: req.body.fone
   }
   res.send(contato)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})