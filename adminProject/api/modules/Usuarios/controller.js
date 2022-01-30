const helper = require('../../core/helpers');

module.exports = {
    getUsuarios: function(req, res, next) {
        var Usuarios = req.orm.model.Usuarios;
        Usuarios.findAll({
            include: [{
                model: req.orm.model.Promoter,
                as: 'Promoter'
            }]
        }).then((usuarios) => {
            res.status(200).json(usuarios);
        }).catch((error) => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel obter os usuários`
                }]
            });
        });
    },

    edit: function(req, res, next) {
        logger.info('> Params received', req.params)
        var Usuarios = req.orm.model.Usuarios;

        var promise = [];
        promise.push(Usuarios.findByPk(req.params.usu_codigo, {
            include: [{
                model: req.orm.model.Promoter,
                as: 'Promoter'
            }],
            attributes: {
                exclude: ['usu_password']
            }
        }));

        promise.push(req.orm.model.Promoter.findAll());

        Promise.all(promise).then((data) => {
            res.status(200).json({
                usuario: data[0],
                promotersList: data[1]
            })
        }).catch((error) => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel consultar as informações sobre o usuário`
                }]
            });
        });
    },

    update: async function(req, res, next) {
        var payload = req.body;
        logger.info('> Payload received:', payload);
        var Usuarios = req.orm.model.Usuarios;

        if (payload.usu_password && payload.usu_password.length > 0) {
            payload.usu_password = await helper.encryptHelper.encrypt(payload.usu_password.trim());
        } else {
            payload.usu_password = undefined;
            delete payload.usu_password;
        }

        if (payload.Promoter && payload.Promoter != null) {
            payload.pro_codigo = payload.Promoter.pro_codigo;
        } else {
            payload.pro_codigo = null;
        }

        delete payload.Promoter;

        Usuarios.update(payload, {
            where: {
                usu_codigo: payload.usu_codigo
            }
        }).then((updated) => {
            return res.status(200).json({
                notifications: [{
                    type: 'success',
                    message: `Usuário atualizado!`
                }]
            });
        }).catch((error) => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possível atualizar o usuário!`
                }]
            });
        });

    },

    getPromotersList: function(req, res, next) {
        req.orm.model.Promoter.findAll().then((promotersList) => {
            res.status(200).json(promotersList)
        }).catch((err) => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel obter a lista de promoters`
                }]
            });
        });
    },

    save: async function(req, res, next) {
        var payload = req.body;
        logger.info('> Payload received:', payload);
        var Usuarios = req.orm.model.Usuarios;

        payload.usu_password = await helper.encryptHelper.encrypt(payload.usu_password.trim());

        if (payload.Promoter && payload.Promoter != null) {
            payload.pro_codigo = payload.Promoter.pro_codigo;
        } else {
            payload.pro_codigo = null;
        }

        Usuarios.create(payload).then((newUsuario) => {
            res.status(200).json({
                redirect: '/usuarios/editar/' + newUsuario.usu_codigo
            })
        }).catch((error) => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel adicionar usuário`
                }]
            });
        });
    },

    delete: async function(req, res, next) {
        logger.info('> Params received:', req.params);
        var Usuarios = req.orm.model.Usuarios;

        Usuarios.destroy({
            where:{
                usu_codigo: req.params.usu_codigo
            }
        }).then((deleted) => {
            return res.status(200).json({
               notifications: [{
                 type: 'success',
                 message: `Usuário removido!`
               }]
            });
        }).catch((error) => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel remover usuário`
                }]
            });
        });
    }
}