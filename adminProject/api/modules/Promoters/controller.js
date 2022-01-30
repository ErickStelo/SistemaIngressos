const helpers = require('../../core/helpers');
const logger = require('../../core/logger');
const GlobalConfigs = require('../../globalConstants');

module.exports = {
    index: function(req, res, next) {
        var Promoter = req.orm.model.Promoter;

        Promoter.findAll().then(promoter => {
            res.status(200).json(promoter)

        }).catch(error => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel obter a lista de promoters`
                }]
            });
        })
    },
    edit: function(req, res, next) {
        var Promoter = req.orm.model.Promoter;
        Promoter.findByPk(req.params.pro_codigo).then(promoter => {
            res.status(200).json(promoter)

        }).catch(error => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel obter dados sobre o promoter`
                }],
            }, );
        })
    },
    update: function(req, res, next) {
        var Promoter = req.orm.model.Promoter;
        var payload = req.body
        console.log(payload);
        Promoter.update(payload, {
            where: {
                pro_codigo: payload.pro_codigo
            }
        }).then(promoter => {
            return res.status(200).json({
                notifications: [{
                    type: 'success',
                    message: `Promoter atualizado`
                }],
                redirect: '/promoters'

            });

        }).catch(error => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel obter dados sobre o promoter`
                }]
            });
        })
    },

    save: function(req, res, next) {
        var Promoter = req.orm.model.Promoter;
        var payload = req.body;

        Promoter.create(payload).then(newPromoter => {
            res.status(200).json({
                redirect: '/promoters/editar/' + newPromoter.pro_codigo
            })
        }).catch(error => {
            res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: 'Não fo possivel adicionar o novo promoter'
                }]
            })
        })
    },
    delete: function(req, res, next) {
        var Promoter = req.orm.model.Promoter;

        Promoter.destroy({
            where:{
                pro_codigo: req.params.pro_codigo
            }
        }).then(deleted => {
            res.status(200).json({
                notifications: [{
                    type: 'success',
                    message: 'Promoter removido com sucesso!'
                }],
                redirect: '/promoter'
            })
        }).catch(error => {
            logger.error(error)
            res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: 'Não fo possivel remover o promoter'
                }]
            })
        })
    }
}