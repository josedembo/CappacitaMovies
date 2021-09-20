const  url2_image = "https://image.tmdb.org/t/p/w400"

//abre a tela de detalhes
function abrir(id){
    getMovei(id)
    const box = document.querySelector(".box")
    box.style.display = "block"

}

// fecha a tela de detalhes
function fechar(){
    const box = document.querySelector(".box")
    box.style.display = "none"
}

async function getMovei(id){
    try {
        const response = await axios.get(`http://localhost:3367/filme/${id}`)
        
        const data = response.data
        const elemets = movieDadta(data)

        DescreveFilme(elemets)


    } catch (error) { 

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
        year : data.release_date,
        descricao: data.overview,
        adulto: data.adult,
        genero: generos,
        tempo: data.runtime,
        imagem:`${url2_image}${data.poster_path}`,
        pontuacao: data.vote_average
    }
}

// atribuie a descrição de cada  filme
function DescreveFilme(elemets){
    const img = document.querySelector("#img-detalhes")
    img.setAttribute("src", `${url2_image}${elemets.imagem}`)
    
    const nome = document.querySelector(".description").children[0];
    const ano = document.querySelector(".description").children[1];
    const  pontuacao= document.querySelector(".description").children[2];
    const generos = document.querySelector(".description").children[3];
    const descricao = document.querySelector(".description").children[4];
    const restricao = elemets.adulto ? "18+|" : ""
 
    console.log("teste")
    nome.innerHTML = elemets.name
    ano.innerHTML = elemets.year
    pontuacao.innerHTML = elemets.pontuacao
    generos.innerHTML = `${restricao} ${Object.values(elemets.genero)} | ${elemets.tempo} min `
    descricao.innerHTML = `${elemets.descricao}`
}




