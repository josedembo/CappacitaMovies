const {databaseConnection} = require("./connection")

// cadastra um novo comentário no banco de dados
async function cadastrarFilmes(form){

    try {
        if(form.user_name == "" || form.fl_name == "" || form.fl_coment =="" ){
            
            return "priencha os campos vazios"
        }else{

            const result = await databaseConnection("filmes").insert(form)
            return "comentário cadastrado"
        }
    } catch (error) {
        console.log(error.message,"\nDeu erro na inserção")
    }

}

// busca todos os comentários no banco de dados
async function mostarComentarios(){

    // knex.select().table('books')
    try {
        const result = await databaseConnection("filmes")
        return result
    } catch (error) {
        return error.message
    }

}

module.exports = {cadastrarFilmes, mostarComentarios}