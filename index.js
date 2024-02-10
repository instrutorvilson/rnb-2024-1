const express = require('express')
const app = express()
const port = 3000

const contatos = [
  {id:1, nome:'maria', email:'maria@gmail.com', fone:'(47)9090-7060'},
  {id:2, nome:'joão', email:'joao@gmail.com', fone:'(47)8080-7060'}
]

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contatos', (req, res) => {
    res.send(contatos)
})

app.get('/contatos/:id', (req, res) => {
  res.send(`Contato: ${req.params.id} `)
})


app.post("/contatos", (req, res) => {
   let contato = {
    id: contatos.length+1,
    nome: req.body.nome,
    email: req.body.email,
    fone: req.body.fone
   }
   contatos.push(contato)
   res.send(contato)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})