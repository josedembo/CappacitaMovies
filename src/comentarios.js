async function getComentarios(){
    try {
        const {data} = await axios.get("http://localhost:3367/comentarios")
        // var parseDataLong = Date.parse (data.fl_created_at);
        // console.log(parseDataLong);
        // var dataISODataHora = new Date("2021-09-19T05:16:40.000Z");
        // console.log(dataISODataHora);
        // console.log(data.fl_created_at)
        console.log(data)
        
        const comentar = document.querySelector("tbody")
        
        let row = ""
        
        for(coment of data){

            const dataISODataHora = formataData(coment)
            
            row += `<tr><th scope="row">${coment.id}</th><td>${coment.user_name}</td> <td>${coment.fl_name}</td> <td>${coment.fl_coment}</td>  <td>${dataISODataHora}</td> </tr>`
            comentar.innerHTML = row
        }
        
    } catch (error) {
        console.log(error)
    }
}


function formataData(dados){
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    var data = new Date(dados.fl_created_at);
    console.log(data); 
    let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));

    let horaFormatada = ((data.getHours() + ":" + data.getMinutes()+ ":" + data.getSeconds()));
    console.log(dataFormatada); 
    return `${dataFormatada} - ${horaFormatada}`
            
}

getComentarios()