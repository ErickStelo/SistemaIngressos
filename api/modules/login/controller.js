const helpers = require('../../core/helpers');
const GlobalConfigs = require('../../globalConstants')
const crypto = require('crypto');
var jwt = require('jsonwebtoken');

module.exports = {
    checkLogin: async function(req, res, next) {
        var Usuarios = req.orm.model.Usuarios;
        var payload = req.body;
        console.log(payload);
        Usuarios.findOne({
            where: {
                usu_username: payload.usuario,
            }
        }).then(usuario => {
            if (usuario != null) {
                helpers.encryptHelper.verify(payload.senha, usuario.usu_password).then(valid => {
                    if (valid === true) {
                        jwt.sign(JSON.stringify(usuario), GlobalConfigs.JWTprivateKey, function(err, token) {
                            if(!err){
                                res.status(200).json({
                                    token: token
                                });
                            }else{
                                res.status(500).json({
                                    fail: 'Não foi possivel fazer o login!',
                                })
                            }
                        });
                    } else {                        res.status(200).json({
                            fail: 'Senha inválida',
                        })
                    }
                })
            } else {
                res.status(200).json({
                    fail: 'Usuário não encontrado',
                })
            }
        })
    }
}