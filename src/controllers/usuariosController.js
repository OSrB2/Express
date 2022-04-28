const { Usuarios } = require('../models');
const bcrypt = require('bcryptjs'); // criptografia senha

const usuariosController = {
  listarUsuarios: async (req, res) => {
    const listaDeUsuarios = await Usuarios.findAll({});

    res.json(listaDeUsuarios);
  },

  criarUsuarios: async (req, res) => {
    const { nome, email, senha } = req.body;

    const novaSenha = bcrypt.hashSync(senha, 10);

    const novoUsuario = await Usuarios.create({
      nome,
      email,
      senha: novaSenha,
    });
    res.status(201).json(novoUsuario);
  },

  deletarUsuarios: async (req, res) => {
    const { id } = req.params;

    await Usuarios.destroy({
      where: {
        id,
      },
    });
    res.json('Usuário deletado!');
  },

  atualizarUsuarios: async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const usuarioAtualizado = await Usuarios.update(
      {
        nome,
        email,
        senha,
      },
      {
        where: {
          id,
        },
      }
    );
    res.json('Usuário atualizado!');
  },
};

module.exports = usuariosController;
