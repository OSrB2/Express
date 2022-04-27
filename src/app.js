const express = require('express');
const routes = require('./routes');

const db = require('./database');
// versão desestruturada: const { hasConnection } = require('./database');

const app = express();

db.hasConnection();

app.use(express.json()); // tem que ficar antes das rotas

app.use(routes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
