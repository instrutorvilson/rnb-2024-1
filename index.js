const express = require('express')
const app = express()
const port = 3000

const contatos = [
  {id:1, nome:'maria', email:'maria@gmail.com', fone:'(47)9090-7060'},
  {id:2, nome:'joão', email:'joao@gmail.com', fone:'(47)8080-7060'}
]

app.use(express.json())

app.get('/contatos', (req, res) => {
    res.send(contatos)
})

app.get('/contatos/:id', (req, res) => {
 var contato = contatos.filter(ct => ct.id == req.params.id)[0]
 if(contato != null)
    res.send(contato)
 else
   res.status(404).send({message:"Contato não encontrado"})
})

app.delete('/contatos/:id', (req, res) => {
  var contato = contatos.filter(ct => ct.id == req.params.id)[0]
  if(contato != null){
    contatos.splice(getPosicaoContato(contato.id), 1)
    res.status(204).send()
  }     
  else
    res.status(404).send({message:"Contato não encontrado"})
 })

 app.put('/contatos/:id', (req, res) => {
  var contato = contatos.filter(ct => ct.id == req.params.id)[0]
  if(contato != null){
    contato.nome = req.body.nome
    contato.email = req.body.email
    contato.fone = req.body.fone
    res.status(200).send(contato)
  }     
  else
    res.status(404).send({message:"Contato não encontrado"})
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

function getPosicaoContato(id){
  let posicao = -1
  for(let i = 0; i < contatos.length; i++){
    if(contatos[i].id == id){
      posicao = i
      break
    }
  }
  return posicao
}