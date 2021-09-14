const express = require("express")
const cors = require("cors")
const app = express()
const axios = require("axios")
require("dotenv").config

// const API_KEY = process.env.API_KEY
const API_KEY = "b7eaea3eb00f546b229268e21f35982e"


app.use(cors())

const host = "api.themoviedb.org/3/movie"
const typeReq = "top_rated"

app.get("/", async (req, res) =>{

    try {
        const {data} = await axios(`https://${host}/${typeReq}?api_key=${API_KEY}`)
        res.send(data.results)
        return data.results
        
    } catch (error) {
        res.send(error.message)
    }
    // return data.results
})
 


app.get("/filme/:id", async (req, res) =>{
    try {
        const {data} = await axios(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${API_KEY}`)
        res.send(data)
        return data.results
        
    } catch (error) {
        res.send(error.message)
    }
})



app.listen(1234)