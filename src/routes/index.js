const express = require('express');
const produtoController = require('../controllers/produtoController');
const usuariosController = require('../controllers/usuariosController');
const routes = express.Router();

// Rotas Produtos
routes.get('/produto/lista', produtoController.listarProdutos);
routes.post('/produto/criar', produtoController.cadastrarProduto);
routes.delete('/produto/:id/deletar', produtoController.deletarProduto);
routes.put('/produto/:id/atualizar', produtoController.atualizarProduto);

// Rotas usuários
routes.get('/usuario/lista', usuariosController.listarUsuarios);
routes.post('/usuario/cadastrar', usuariosController.criarUsuarios);
routes.delete('/usuario/:id/deletar', usuariosController.deletarUsuarios);
routes.put('/usuario/:id/atualizar', usuariosController.atualizarUsuarios)

module.exports = routes;
