// pegas os comentários do banco de dados e mostra para o usuário
async function getComentarios(){
    try {
        const {data} = await axios.get("http://localhost:3367/comentarios")
        
        const comentar = document.querySelector("tbody")
        
        let row = ""
        
        for(coment of data){

            const dataISODataHora = formataData(coment)
            
            row += `<tr><th scope="row">${coment.id}</th><td>${coment.user_name}</td> <td>${coment.fl_name}</td> <td>${coment.fl_coment}</td>  <td>${dataISODataHora}</td> </tr>`
            comentar.innerHTML = row
        }
        
    } catch (error) {
        return error.message
    }
}

// formata a hora e a data dos comentários
function formataData(dados){

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    var data = new Date(dados.fl_created_at);
  
    let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));

    let horaFormatada = ((data.getHours() + ":" + data.getMinutes()+ ":" + data.getSeconds()));
 
    return `${dataFormatada} - ${horaFormatada}`
            
}

getComentarios()