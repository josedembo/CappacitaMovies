const  url_image = "https://image.tmdb.org/t/p/w300"

async function getMovies(){
    
    try {
        const {data} = await axios.get("http://localhost:1234/")
        // console.log(response.status)
        // const data = await response.json()

        listMovies(data)

        
    } catch (error) {
        
        console.log(error)
    }
}


function movies(users){
    let nomeFil = ""
    
    for(let movie of users){
        nomeFil += `<li> ${movie.title}</li>`
    }
    
    document.querySelector("ol").innerHTML = nomeFil
}

function listMovies(data){
    
    let listarFilmes = ""
  

    for(filme of data){

        let year = filme.release_date.slice(0, 4)
    
        listarFilmes += `<div class="col-md-3" id="${filme.id}"  ><figure><a onclick="alerta(${filme.id})"  href="#box" target="_blanck"><img src="${url_image}${filme.poster_path}" class ="img-fluid img-thumbnail" alt="" title="${filme.title}"></a>  <figcaption class="name text-center ">${filme.title}</br>${year}</figcaption> </figure></div>`

        document.querySelector(".row").innerHTML = listarFilmes

    }


}
getMovies()

