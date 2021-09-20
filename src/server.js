const express = require("express")
const cors = require("cors")
const app = express()
const axios = require("axios")
const bodyParser = require('body-parser')
const database = require("../db/databaseMysqlKnex")
require("dotenv").config

const API_KEY = process.env.API_KEY


//body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())

const host = "api.themoviedb.org/3/movie"
const typeReq = "upcoming"


// busca filmes na API do TMDB
app.get("/", async (req, res) =>{

        const response = await axios(`https://${host}/${typeReq}?api_key=${API_KEY}&language=pt-BR
        `)
          const  {data} = response

          if(response.status == 200){
            res.status(200).send(data.results)
          }
          

})
 

// busca um filme  pelo id na API do TMDB
app.get("/filme/:id", async (req, res) =>{
    
        const {data} = await axios(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${API_KEY}&language=pt-BR
        `)
        res.send(data)
   
})


// recebe os comentarios digitados pelo usuario e cadastra no banco de dados
app.post("/comentario", async(req, res) =>{
    const dataForm = {
        fl_id:req.body.movieId,
        user_name: req.body.name,
        fl_name:req.body.filme,
        fl_coment:req.body.comentario
    }

    res.send( await database.cadastrarFilmes(dataForm))
    
})


// busca e mostra todos os comentários do banco de dados
app.get("/comentarios", async (req, res) => {
    res.send(await database.mostarComentarios())
})


app.listen(3367)