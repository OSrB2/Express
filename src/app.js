const express = require('express');
const routes = require('./routes'); // const requestLog = require('./middlewares/requestLog'); // middlewares global
const db = require('./database'); // versão desestruturada: const { hasConnection } = require('./database');
const handleError = require('./middlewares/handleError');

const app = express();

db.hasConnection();

app.use(express.json()); // tem que ficar antes das rotas
//app.use(requestLog);
app.use(routes);
app.use(handleError);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
