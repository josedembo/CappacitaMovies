const  url_image = "https://image.tmdb.org/t/p/w500"

async function getMovies(){
    
    try {
        const response = await fetch("http://localhost:1234/")
        console.log(response.status)
        const data = await response.json()
        const moveis  = []

        for(let movie of data){
            // console.log(movie.title)
        }

        listMovies(data)
        
    } catch (error) {
        
        console.log(error)
    }
}

async function getMovei(id){
    try {
        const response = await fetch(`http://localhost:1234/filme/${id}`)
        const data = await response.json()


        console.log(movieDadta(data))
       
   
    
        
    } catch (error) {
        
        console.log(error)
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
        year : data.release_date,
        descricao: data.overview,
        adulto: data.adult,
        genero: generos,
        tempo: data.runtime,
        imagem:`${url_image}${data.poster_path}`
    }
}

function listMovies(data){
    
    let listarFilmes = ""
  

    for(filme of data){

        let year = filme.release_date.slice(0, 4)
    
        listarFilmes += `<div class="col-md-3" id="${filme.id}"><figure><a href="" target="_blanck"><img src="${url_image}${filme.poster_path}" class ="img-fluid img-thumbnail" alt="" title="${filme.title}"></a>  <figcaption class="name text-center ">${filme.title}</br>${year}</figcaption> </figure></div>`
        
        console.log(listarFilmes)

        document.querySelector(".row").innerHTML = listarFilmes

    }

    const links = document.querySelectorAll("a")

    for(link of links){
        link.setAtrribute("./filme.html", "href")
    }

}
// getMovies()
getMovei(566525)