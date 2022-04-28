const express = require('express');
const produtoController = require('../controllers/produtoController');
const usuariosController = require('../controllers/usuariosController');
const requestLog = require('../middlewares/requestLog'); // middlewares local
const bloqueio = require('../middlewares/bloqueio');
const usuarioCreateValidation = require('../validations/usuarios/create');
const authController = require('../controllers/authController');
const authLoginValidation = require('../validations/auth/login');
const auth = require('../middlewares/auth');
const routes = express.Router();

// Rotas Produtos
routes.get('/produtos', requestLog, bloqueio, produtoController.listarProdutos);
routes.post('/produtos', auth, produtoController.cadastrarProduto);
routes.delete('/produtos/:id', produtoController.deletarProduto);
routes.put('/produtos/:id', produtoController.atualizarProduto);

// Rotas usuários
routes.get('/usuarios', usuariosController.listarUsuarios);
routes.post(
  '/usuarios',
  usuarioCreateValidation,
  usuariosController.criarUsuarios
);
routes.post('/login', authLoginValidation, authController.login);
routes.delete('/usuarios/:id', usuariosController.deletarUsuarios);
routes.put('/usuarios/:id', usuariosController.atualizarUsuarios);

module.exports = routes;
