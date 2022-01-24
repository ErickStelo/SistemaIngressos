const helpers = require('../../core/helpers');
const logger = require('../../core/logger');
const GlobalConfigs = require('../../globalConstants');

module.exports = {
    index: function(req, res, next) {
        var Evento = req.orm.model.Evento;

        Evento.findAll().then(eventos => {
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
        var Evento = req.orm.model.Evento;
        var Promoter = req.orm.model.Promoter;
        var promise = [];

        promise.push(Evento.findByPk(req.params.eve_codigo));

        Promise.all(promise).then(data => {
            res.status(200).json({
                evento: data[0],
            })
        }).catch(error => {
            logger.error(error)
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel obter dados sobre o evento`
                }],
            }, );
        })
    },

    update: function(req, res, next) {
        var Evento = req.orm.model.Evento;
        var payload = req.body
        console.log(payload);
        Evento.update(payload, {
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
        var Evento = req.orm.model.Evento;
        var payload = req.body;

        Evento.create(payload).then(newEvento => {
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
        var Evento = req.orm.model.Evento;

        Evento.destroy({
            where: {
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
    },

    getPromotersForAdd: function(req, res, next) {
        var Promoter = req.orm.model.Promoter;
        var EventoPromoters = req.orm.model.EventoPromoters;
        var payload = req.body;

        EventoPromoters.findAll({
            where: {
                eve_codigo: payload.eve_codigo
            }
        }).then(promotersAdded => {
            var promotersAddedCods = [];

            _.forEach(promotersAdded, promoter => {
                promotersAddedCods.push(promoter.pro_codigo)
            })

            Promoter.findAll({
                where: {
                    pro_codigo: {
                        [$op.notIn]: promotersAddedCods
                    }
                }
            }).then(listPromoters => {
                res.status(200).json(listPromoters.length > 0 ? listPromoters : [])
            }).catch(error => {
                logger.error(error);
                return res.status(500).json({
                    notifications: [{
                        type: 'error',
                        message: `Não foi possivel consultar os promoters disponíveis`
                    }]
                });
            })
        }).catch(error => {
            logger.error(error);
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel consultar os promoters disponíveis`
                }]
            });
        })
    },

    getPromotersList: function(req, res, next) {
        var EventoPromoters = req.orm.model.EventoPromoters;

        EventoPromoters.findAll({
            where: {
                eve_codigo: req.params.eve_codigo
            },
            include: [{
                model: req.orm.model.Promoter,
                as: 'Promoter'
            }]
        }).then(promotersList => {
            res.status(200).json(promotersList.length > 0 ? promotersList : [])
        }).catch(error => {
            logger.error(error);
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel consultar os promoters deste evento`
                }]
            });
        })
    },

    addPromoter: function(req, res, next) {
        var EventoPromoters = req.orm.model.EventoPromoters;
        var payload = req.body;
        console.log('Payload Received: ', payload);

        EventoPromoters.create(payload).then(newPromoterEvento => {
            return res.status(200).json({
                notifications: [{
                    type: 'success',
                    message: `Promoter adicionado ao evento`
                }]
            });
        }).catch(error => {
            logger.error(error);
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel adicionar o promoter deste evento`
                }]
            });
        })
    },
    excluirPromoter: function(req, res, next) {
        var EventoPromoters = req.orm.model.EventoPromoters;
        var payload = req.body;
        console.log('Payload Received: ', payload);

        EventoPromoters.destroy({
            where: {
                evp_codigo: payload.evp_codigo
            }
        }).then(removed => {
            return res.status(200).json({
                notifications: [{
                    type: 'success',
                    message: `Promoter removido do evento`
                }]
            });
        }).catch(error => {
            logger.error(error);
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel remover o promoter deste evento`
                }]
            });
        })
    },

    adicionarProduto: function(req, res, next) {
        var EventoProdutos = req.orm.model.EventoProdutos;
        var payload = req.body;
        logger.info('> Payload received:', payload);

        EventoProdutos.create(payload).then(newProduto => {
            res.status(200).json(newProduto);
        }).catch(error => {
            logger.error('> ', error);
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel adicionar o produto a este evento`
                }]
            });
        })
    },
    getProdutosLotes: function(req, res, next) {
        var EventoProdutos = req.orm.model.EventoProdutos;
        var CategoriaPrecos = req.orm.model.CategoriaPrecos;
        logger.info('> Params received:', req.params);

        var promise = [];

        promise.push(
            EventoProdutos.findAll({
                include: [{
                    model: req.orm.model.EventoProdutoLote,
                    as: 'ProdutoLotes',
                    include: [{
                        model: req.orm.model.LoteCategoriaPrecoValor,
                        as: 'LoteCategoriaPrecoValor',
                        include: [{
                            model: req.orm.model.CategoriaPrecos,
                            as: 'CategoriaPrecos'
                        }]
                    }]
                }],
                where: {
                    eve_codigo: req.params.eve_codigo
                }
            })
        );
        promise.push(
            CategoriaPrecos.findAll()
        );

        Promise.all(promise).then(data => {
            res.status(200).json({
                produtosLotes: data[0],
                categoriaValores: data[1]
            })
        }).catch(error => {
            logger.error('> ', error)
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel consultar os produtos deste evento`
                }]
            });
        })
    },

    removerProduto: function(req, res, next) {
        logger.info('> Params received:', req.params);
        var EventoProdutos = req.orm.model.EventoProdutos;
        EventoProdutos.destroy({
            where: {
                eve_codigo: req.params.eve_codigo,
                epr_codigo: req.params.epr_codigo
            }
        }).then(removed => {
            res.status(200).json({})

        }).catch(error => {
            logger.error('>', error)
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel remover o produto!`
                }]
            });
        })
    },

    addLoteToProduto: function(req, res, next) {
        logger.info('Params received:', req.params)
        var EventoProdutoLote = req.orm.model.EventoProdutoLote;
        EventoProdutoLote.count({
            where: {
                epr_codigo: req.params.epr_codigo
            }
        }).then(qtdLotes => {
            let nextNumLote = (qtdLotes > 0 ? qtdLotes + 1 : 1);
            console.log(qtdLotes, nextNumLote);
            EventoProdutoLote.create({
                epr_codigo: req.params.epr_codigo,
                epl_lote_numero: nextNumLote,
                epl_ativo: (nextNumLote === 1 ? true : false)
            }).then(newLote => {
                EventoProdutoLote.findByPk(newLote.epl_codigo, {
                    include: [{
                        model: req.orm.model.LoteCategoriaPrecoValor,
                        as: 'LoteCategoriaPrecoValor',
                        include: [{
                            model: req.orm.model.CategoriaPrecos,
                            as: 'CategoriaPrecos'
                        }]
                    }]
                }).then(loteData => {
                    res.status(200).json(loteData);
                }).catch(error => {
                    logger.error('> ', error);
                    return res.status(500).json({
                        notifications: [{
                            type: 'error',
                            message: `Não foi possivel consultar as informações do novo lote!`
                        }]
                    });
                })
            }).catch(error => {
                logger.error('> ', error);
                return res.status(500).json({
                    notifications: [{
                        type: 'error',
                        message: `Não foi possivel adicionar o novo lote!`
                    }]
                });
            })
        }).catch(error => {
            logger.error('> ', error);
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel adicionar o novo lote!`
                }]
            });
        })

    },

    removerLoteFromProduto: function(req, res, next) {
        var payload = req.body;
        var EventoProdutoLote = req.orm.model.EventoProdutoLote;
        logger.info('Payload received: ', payload);

        EventoProdutoLote.destroy({
            where: {
                epl_codigo: payload.epl_codigo
            }
        }).then(removed => {
            return res.status(200).json({
                notifications: [{
                    type: 'success',
                    message: `Lote removido com sucesso!`
                }]
            });
        }).catch(error => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possivel remover este lote do produto!`
                }]
            });
        })

    },

    addCategoriaPrecoToLote: function(req, res, next) {
        var payload = req.body;
        var LoteCategoriaPrecoValor = req.orm.model.LoteCategoriaPrecoValor
        logger.info('Payload received:', payload);

        LoteCategoriaPrecoValor.findOne({
            where: {
                epl_codigo: payload.epl_codigo,
                cap_codigo: payload.cap_codigo
            }
        }).then(checkIfExists => {
            if (checkIfExists === null) {
                LoteCategoriaPrecoValor.create({
                    epl_codigo: payload.epl_codigo,
                    cap_codigo: payload.cap_codigo,
                    lpv_limiteingressos: null,
                    lpv_valoringresso: 0
                }).then(newCVL => {
                    LoteCategoriaPrecoValor.findByPk(newCVL.lpv_codigo, {
                        include: [{
                            model: req.orm.model.CategoriaPrecos,
                            as: 'CategoriaPrecos'
                        }]
                    }).then(dataCategoriaValorLote =>{
                        res.status(200).json(dataCategoriaValorLote)

                    }).catch(error =>{
                        return res.status(500).json({
                           notifications: [{
                             type: 'error',
                             message: `Não foi possivel consultar as informações da nova categoria de valores`
                           }]
                        });
                    })
                }).catch(error => {
                    logger.error('>', error);
                    return res.status(500).json({
                        notifications: [{
                            type: 'error',
                            message: `Falha ao adicionar nova categoria de valor ao lote`
                        }]
                    });
                })
            } else {
                return res.status(200).json({
                    notifications: [{
                        type: 'error',
                        message: `Esta categoria de valor já esta presente neste lote!`
                    }]
                });
            }
        }).catch(error => {
            logger.error('>', error);
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Falha ao adicionar nova categoria de valor ao lote`
                }]
            });
        })
    },

    removeCategoriaPrecoFromLote: function(req, res, next) {
        var payload = req.body;
        var LoteCategoriaPrecoValor = req.orm.model.LoteCategoriaPrecoValor
        logger.info('Payload received:', payload);

        LoteCategoriaPrecoValor.destroy({
            where:{
                lpv_codigo: payload.lpv_codigo
            }
        }).then(removed =>{
            res.status(200).json();
        }).catch(error =>{
            return res.status(500).json({
               notifications: [{
                 type: 'error',
                 message: `Não foi possivel remover a categoria de valor deste lote`
               }]
            });
        })
    },
    saveCategoriaPreco: function(req, res, next) {
        var payload = req.body;
        var LoteCategoriaPrecoValor = req.orm.model.LoteCategoriaPrecoValor
        logger.info('Payload received:', payload);

        LoteCategoriaPrecoValor.update(payload,{
            where:{
                lpv_codigo: payload.lpv_codigo
            }
        }).then(removed =>{
            return res.status(200).json({
               notifications: [{
                 type: 'success',
                 message: `Categoria de valor atualizada`
               }]
            });
        }).catch(error =>{
            return res.status(500).json({
               notifications: [{
                 type: 'error',
                 message: `Não foi possivel atualizar a categoria de valor deste lote`
               }]
            });
        })
    }
}