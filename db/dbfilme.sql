-- execute as duas linhas abaixo para a criação do banco de dados e da tabela

create database  dbfilme;

create table filmes(id int not null unique auto_increment, fl_id int not null, user_name varchar(100) not null,
fl_name varchar(100) not null, fl_coment varchar(1000) not null, fl_created_at datetime not null default current_timestamp, fl_updated_at datetime  default null on update current_timestamp, 
primary key(id));
