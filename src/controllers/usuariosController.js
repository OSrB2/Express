const Usuarios = require('../models/Usuarios');

const usuariosController = {
  listarUsuarios: async (req, res) => {
    const listaDeUsuarios = await Usuarios.findAll({});

    res.json(listaDeUsuarios);
  },

  criarUsuarios: async (req, res) => {
    const { nome, email, senha } = req.body;

    const novoUsuario = await Usuarios.create({
      nome,
      email,
      senha,
    });
    res.json(novoUsuario);
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
