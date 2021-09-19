const  url_image = "https://image.tmdb.org/t/p/w300"

async function getMovies(){
    
    try {
        const {data} = await axios.get("http://localhost:3367/")
        // console.log(response.status)
        // const data = await response.json()

        listMovies(data)
        listMoviesName(data)
        getId()

        
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
    
        listarFilmes += `<div class="col-md-3" id="${filme.id}"  ><figure><a onclick="alerta(${filme.id})"  href="#box"><img src="${url_image}${filme.poster_path}" class ="img-fluid img-thumbnail" alt="" title="${filme.title}"></a>  <figcaption class="name text-center ">${filme.title}</br>${year}</figcaption> </figure></div>`

        document.querySelector(".row").innerHTML = listarFilmes

    }


}

function listMoviesName(data){
    
    let listarFilmes = "<option selected>selecione</option>"
  

    for(filme of data){
       

        listarFilmes += `<option id="${filme.id}" value="${filme.title}">${filme.title}</option>`

        document.querySelector(".filme").innerHTML = listarFilmes

    }
}

function getId(){
    // var select = document.querySelector('.filme');
	// var value = select.options[select.selectedIndex].value;
	// console.log(value); // pt

    var select = document.querySelector('.filme');
    select.addEventListener('change', function() {
    var option = this.selectedOptions[0];
    var value = option.id;

    const movieId = document.querySelector(".movieId")
    movieId.innerHTML = value
    console.log(value)
    })



}


getMovies()

