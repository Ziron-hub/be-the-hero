const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require("body-parser")
require('dotenv').config()

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(routes);

/*
 * Métodos HTTP:
 * 
 *  GET: Buscar uma informação do back-end
 *  POST: Criar uma informação no back-end
 *  PUT: Alterar uma informação no back-end
 *  DELETE: Deletar uma informação no back-end
 * 
*/

/*
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
*/

/*
 * Driver: Select * FROM users
 * Query Builder: table('users').select('*').where()
 * 
*/


app.listen(3333);
