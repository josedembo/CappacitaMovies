# CappacitaMovies
## Site que apresenta lista de filmes com tela de detalhes para cada filme apresentado (Projeto do Desafio Final CappacitaDev - Fase03_TOHERO)
[![bagde](https://img.shields.io/badge/site-CappacitaMovies-E50914)](https://github.com/josedembo/CappacitaMovies)
[![GitHub issues](https://img.shields.io/github/issues/josedembo/CappacitaMovies)](https://github.com/josedembo/CappacitaMovies/issues)
[![GitHub forks](https://img.shields.io/github/forks/josedembo/CappacitaMovies)](https://github.com/josedembo/CappacitaMovies/network)
[![GitHub license](https://img.shields.io/github/license/josedembo/CappacitaMovies)](https://github.com/josedembo/CappacitaMovies/blob/main/LICENSE)

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#cappacitamovies)
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Autenticações necessárias](#autenticações-necessárias)
   * [Como Rodar o projeto](#como-usar)
      * [Pre Requisitos](#pré-requisitos)
      * [Combo](#combo)
   * [Tecnologias](#tecnologias)
<!--te-->
# Autenticações necessárias
  Os filmes ilustrados no site [cappacitavaMovies](https://github.com/josedembo/CappacitaMovies)  são obtidos apartir de chamadas a API do TMDB e para isso é necessário um chave(key) acesso, sendo assim é de estrema importância obter uma chave de acesso para consumir a API do TMDB, com isso é necessário acessar o site do [TMDB](https://www.themoviedb.org/?language=pt-BR) fazer o login e gerar uma chave de acesso, pode seguir o [tutorial](https://www.youtube.com/watch?v=mbImkkJFxBs) para a criação da chave de acesso. Após gerar a chave de acesso pode guarda-la para depois.
  

# Como Rodar o projeto

### Pré-requisitos

Antes de começar a rodaro projeto, você vai precisar instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o [msql](https://dev.mysql.com/doc/refman/8.0/en/installing.html). 
Também pode seguir o tutorial para a instalação no windows ou no lixux: [mysql-windows](https://www.youtube.com/watch?v=iYN9a3i2qkQ&t=117s) e [mysql-linux](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04-pt)

Após isso é recomendável a instalação de um editor de código(caso não tenha), como o [VSCode](https://code.visualstudio.com/)

### dependecias
<!--ts-->
   * [pacotes](#Sobre)
      * [express](https://expressjs.com/pt-br/)
      * [axios](https://axios-http.com/docs/intro)
      * [cors](http://expressjs.com/en/resources/middleware/cors.html)
      * [dotenv](https://www.npmjs.com/package/dotenv)
      * [mysql2](https://www.npmjs.com/package/mysql2)
      * [knex](https://knexjs.org/#Installation-node)
      * [body-parser](https://www.npmjs.com/package/body-parser)
      * como dependencia de desenvovimento instale o [nodemon](https://www.npmjs.com/package/nodemon): `npm install --save-dev nodemon`
      * para ver a versões de cada pacote pode acesse o [package.json](https://github.com/josedembo/CappacitaMovies/blob/main/package.json) do projeto
    
   * Banco de dados
      * Após a instalção do mysql server e do workbanch(opcional), é necessário criar um banco de dados e uma tabela para guardar os comentários:
      ```bash
      # Cria o banco de dados
      $ create database  dbfilme;

      # crie a tabela com os respectivos colunas ou atributos
      $ create table filmes(id int not null unique auto_increment, fl_id int not null, user_name varchar(100) not null,
      fl_name varchar(100) not null, fl_coment varchar(1000) not null, fl_created_at datetime not null default current_timestamp, fl_updated_at datetime  default       null on update current_timestamp, primary key(id));
      ```
      * O código acima também está disponivel no arquivo [dbfilmes] ()
      * caso já tenha o mysql server instaldo e o seu usário root tenha senha, essas própriedades podem ser alteradas após fazer o clone do projeto no arquivo [knexFile.js](https://github.com/josedembo/CappacitaMovies/blob/main/db/knexFile.js), na linha 7 o atributo `password : ''` pode ser alterado `password : '<senha do seu usuario root>'`, caso  não tenha criado uma senha para o usuario root , não será necessário alterar o arquivo
      
<!--te-->

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/josedembo/CappacitaMovies.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd CappacitaMovies

# Instale as dependências
$ npm install <nome-do-pacote>

# crie um aquivo .env na raiz do projeto e coloque dentro do arquivo a seguinte linha de código:
$ API_KEY=<a chave de acesso gerada no site TMDB>
  
# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor estará rodando  na porta:3367
```
### 🎲 Rodando o Front End
 * para inicializar a página e com o Back End já rodando acesse o terminar na raiz do projeto e roda o comando `npx lite-server` ou pode inicializar o arquivo [index.html](https://github.com/josedembo/CappacitaMovies/blob/main/index.html)  no vscode com o [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)



### Autor
---

<a href="https://github.com/josedembo">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/68882941?s=400&u=d518c6c61763405cd84f0d90e75f64845c37495c&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>José Pedro Daniel Dembo</b></sub></a> <a href="https://github.com/josedembo" title="josedembo">🚀</a>


Primero gradnde projeto feito com muita dedicação e ❤️ por José pedro Daniel Dembo 👋🏽 Entre em contato!
 
[![Linkedin Badge](https://img.shields.io/badge/-josedembo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/josedembo/)](https://www.linkedin.com/in/josedembo/) 
