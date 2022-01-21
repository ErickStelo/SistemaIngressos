const helpers = require('../../core/helpers');
const logger = require('../../core/logger');
const GlobalConfigs = require('../../globalConstants');

module.exports = {
    index: function(req, res, next) {
        var Eventos = req.orm.model.Eventos;

        Eventos.findAll().then(eventos => {
            res.status(200).json(eventos)

        }).catch(error => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel obter a lista de eventos`
                }]
            });
        })
    },
    edit: function(req, res, next) {
        var Eventos = req.orm.model.Eventos;
        Eventos.findByPk(req.params.eve_codigo).then(evento => {
            res.status(200).json(evento)

        }).catch(error => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel obter dados sobre o evento`
                }],
            }, );
        })
    },
    update: function(req, res, next) {
        var Eventos = req.orm.model.Eventos;
        var payload = req.body
        console.log(payload);
        Eventos.update(payload, {
            where: {
                eve_codigo: payload.eve_codigo
            }
        }).then(evento => {
            return res.status(200).json({
                notifications: [{
                    type: 'success',
                    message: `Evento atualizado`
                }],
                redirect: '/eventos'

            });

        }).catch(error => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel obter dados sobre o evento`
                }]
            });
        })
    },

    save: function(req, res, next) {
        var Eventos = req.orm.model.Eventos;
        var payload = req.body;

        Eventos.create(payload).then(newEvento => {
            res.status(200).json({
                redirect: '/eventos/editar/' + newEvento.eve_codigo
            })
        }).catch(error => {
            res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: 'Não fo possivel adicionar o novo evento'
                }]
            })
        })
    },
    delete: function(req, res, next) {
        var Eventos = req.orm.model.Eventos;

        Eventos.destroy({
            where:{
                eve_codigo: req.params.eve_codigo
            }
        }).then(deleted => {
            res.status(200).json({
                notifications: [{
                    type: 'success',
                    message: 'Evento removido com sucesso!'
                }],
                redirect: '/eventos'
            })
        }).catch(error => {
            logger.error(error)
            res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: 'Não fo possivel remover o evento'
                }]
            })
        })
    }
}