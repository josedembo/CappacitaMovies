const  url_image = "https://image.tmdb.org/t/p/w400"

async function getMovies(){
    
    try {
        const response = await fetch("http://localhost:1234/")
        console.log(response.status)
        const data = await response.json()

        listMovies(data)
        
    } catch (error) {
        
        console.log(error.message)
    }
}

async function getMovei(id){
    try {
        const response = await fetch(`http://localhost:1234/filme/${id}`)
        const data = await response.json()

        console.log(movieDadta(data))
        const elemets = movieDadta(data)

        const img = document.querySelector("img")
        img.setAttribute("src", `${url_image}${elemets.imagem}`)
        img.setAttribute("id", id)
        
        const nome = document.querySelector(".description").children[0];
        const ano = document.querySelector(".description").children[1];
        const  pontuacao= document.querySelector(".description").children[2];
        const generos = document.querySelector(".description").children[3];
        const descricao = document.querySelector(".description").children[4];
        const opcao = document.querySelector(".filme")
        

        const restricao = elemets.adulto ? "18+|" : ""
        console.log(restricao)
        console.log("teste")
        nome.innerHTML = elemets.name
        ano.innerHTML = elemets.year
        pontuacao.innerHTML = elemets.pontuacao
        generos.innerHTML = `${restricao} ${Object.values(elemets.genero)} `
        descricao.innerHTML = `${elemets.descricao}`
        opcao.innerHTML = `${elemets.name}`
        
    } catch (error) {
        
        console.log(error.message)
        console.log("deu errrooo" ) 
    }
}

function movies(users){
    let nomeFil = ""
    
    for(let movie of users){
        nomeFil += `<li> ${movie.title}</li>`
    }
    
    document.querySelector("ol").innerHTML = nomeFil
}

function movieDadta(data){
    // const  url_image = "https://image.tmdb.org/t/p/w300"
    const genres = data.genres
    const generos =[]
    for(let genero of genres){
        generos.push(genero.name)
    }
    return {
        id:data.id,
        name : data.title,
        year : data.release_date.slice(0, 4),
        descricao: data.overview,
        adulto: data.adult,
        genero: generos,
        tempo: data.runtime,
        imagem:`${url_image}${data.poster_path}`,
        pontuacao: data.vote_average
    }
}

function listMovies(data){
    
    let listarFilmes = ""
  

    for(filme of data){
       

        listarFilmes += ` <option value="${filme.id}">${filme.title}</option>`

        document.querySelector("#inputGroupSelect01").innerHTML = listarFilmes

    }



}
getMovies()
getMovei(566525)