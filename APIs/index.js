const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

// 1 route get.
// app.route('/').get( (req,res) => res.send("Hello"))
// app.route('/sobre').get( (req,res) => res.send("Hello Sobre"))

// 2 route post
//middleware
// app.use(express.json())

// app.route('/').post( (req,res) => res.send(req.body))

// 3 put
// app.use(express.json())

// let author = "Matheus"

// app.route('/').get((req,res) => res.send(author))

// app.route('/').put( (req, res) => {
//     author = req.body.author
//     res.send(author)
// })

// 4 delete
// app.route('/:identificador').delete( (req,res) => {
//     res.send(req.params.identificador)
// })


// body params
//middleware
// app.use(express.json())

// app.route('/').post( (req,res) => {
//     const {nome, cidade, livros_favoritos} = req.body
//     res.send(livros_favoritos)
// })


//rout params

// app.route('/').get( (req,res) => res.send("Oi"))

// app.route('/:variavel').get( (req,res) => res.send(req.params.variavel))

// app.route('/identidade/:nome').get( (req,res) => res.send(req.params.nome))


// query params 3000?nome=Matheus

// app.route('/').get( (req,res) => res.send( req.query.nome ))

// app.route('/about/user').get( (req,res) => res.send( req.query.id ))


//axios

// app.route('/').get((req,res) => {
    
//     axios.get('https://api.github.com/users/matheususko')
//     .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
//     .catch(error => console.log(error))

// })

// API Fetch