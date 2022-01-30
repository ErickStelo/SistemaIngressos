/**
 * @description Middlware da api:  Controla todas as requisições antes que a funcao do endpoint seja chamada.
 *  Permitindo ou nao a conclusão da requisição.
 */
 var logger = require('./logger');

const helper = require('./helpers');
const globalConstants = require('../globalConstants')
var jwt = require('jsonwebtoken');


module.exports = (async (req, res, next) => {
    console.log('Running middleware in route: ' + req.url);
    const allowedUrls = ['/checkLogin'];
    if (!allowedUrls.includes(req.url)) {
        const tokenApi = 'Token lJF7w482l03lpo6188CB';
        if (req.headers.authorization && req.headers.authorization == tokenApi) {
            logger.warn('> Request using the token Api');
            next();
        } else if (req.headers['x-access-token']) {
            const token = req.headers['x-access-token'];

            jwt.verify(token, globalConstants.JWTprivateKey, (erro, decoded) => {
                if (erro) {
                    logger.error('Request credentials attempt fail!', erro);
                    res.status(401).json({
                        message: 'Credentials verification fail'
                    })
                } else {
                    req.userToken = decoded;
                    next();
                }
            })
        } else {
            res.status(401).json()
        }
    } else {
        next();
    }
})