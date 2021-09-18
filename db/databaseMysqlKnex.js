const {databaseConnection} = require("./connection")

async function cadastrarFilmes(form){

    //knex('books').insert({title: 'Slaughterhouse Five'})
    try {
        if(form.user_name == "" || form.fl_name == "" || form.fl_coment =="" ){
            return "priencha os campos vazios"
        }else{

            const result = await databaseConnection("filmes").insert(form)
            return "cometário cadastrado"
        }
    } catch (error) {
        console.log(error.message,"\nDeu erro na inserção")
    }

}

async function mostarFilmes(){

    // knex.select().table('books')
    try {
        const result = await databaseConnection("filmes")
        return result
    } catch (error) {
        return error.message
    }

}

module.exports = {cadastrarFilmes, mostarFilmes}