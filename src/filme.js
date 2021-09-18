const  url_image = "https://image.tmdb.org/t/p/w400"

//bunca todos os filmes
async function getMovies(){
    
    try {
        const response = await fetch("http://localhost:1234/")
        console.log(response.status)
        const data = await response.json()

        listMovies(data)
        const id = document.querySelector("img").id
        console.log("este é o id da imagem:",id)
    } catch (error) {
        
        console.log(error.message)
    }
}

// busca o filme pelo id
async function getMovei(id){
    try {
        const response = await axios.get(`http://localhost:1234/filme/${id}`)
        
        console.log(response.data)
        const data = response.data
        console.log(movieDadta(data))
        const elemets = movieDadta(data)

        DescreveFilme(elemets, id)

    } catch (error) { 
        console.log(error.message)
        return error.message
    }
}

// retorna uma objeto com as informações do filme
function movieDadta(data){
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

// adicona nas opções todos os nomes dos filmes
function listMovies(data){
    
    let listarFilmes = ""
  

    for(filme of data){
       

        listarFilmes += ` <option value="${filme.id}">${filme.title}</option>`

        document.querySelector("#inputGroupSelect01").innerHTML = listarFilmes

    }
}

// atribuie a descrição do filme
function DescreveFilme(elemets, id){
    const img = document.querySelector("img")
    img.setAttribute("src", `${url_image}${elemets.imagem}`)
    img.setAttribute("id", id)
    
    const nome = document.querySelector(".description").children[0];
    const ano = document.querySelector(".description").children[1];
    const  pontuacao= document.querySelector(".description").children[2];
    const generos = document.querySelector(".description").children[3];
    const descricao = document.querySelector(".description").children[4];
    const movieName = document.querySelector(".filme")
    const movieId = document.querySelector(".movieId")
    

    const restricao = elemets.adulto ? "18+|" : ""
    console.log(restricao)
    console.log("teste")
    nome.innerHTML = elemets.name
    ano.innerHTML = elemets.year
    pontuacao.innerHTML = elemets.pontuacao
    generos.innerHTML = `${restricao} ${Object.values(elemets.genero)} `
    descricao.innerHTML = `${elemets.descricao}`
    movieName.innerHTML = `${elemets.name}`
    movieId.innerHTML = `${elemets.id}`
}
getMovies()
getMovei(451048)