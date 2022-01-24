module.exports = {
    getMenus: function(req, res, next) {
        var Menus = req.orm.model.Menus;

        var where = {};
        if (req.userToken.usu_admin === false) {
            where.men_admin = false;
        }

        Menus.findAll({
            include: [{
                model: req.orm.model.Menus,
                as: 'SubMenus'
            }],
            where: where
        }).then((menus) => {
            res.status(200).json(menus);

        }).catch((error) => {
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Não foi possível consultar os menus`
                }]
            });
        });
    },

    getInitData: function(req, res, next) {
        var Usuarios = req.orm.model.Usuarios;

        var promise = [];
        promise.push(
            Usuarios.findByPk(req.userToken.usu_codigo)
        );

        Promise.all(promise).then((data) => {
            res.status(200).json({
                logoutUsuario: data[0].usu_bloquearlogin
            });

            var promise = [];
            // if (data[0].usu_deslogar === true) {
            //     promise.push(
            //         Usuarios.update({
            //             usu_deslogar: false
            //         }, {
            //             where: {
            //                 usu_codigo: data[0].usu_codigo
            //             }
            //         })
            //     );
            // }

            Promise.all(promise).catch((error) => {
                logger.error('> Falha ao atualizar dados no getInitData: ', error)
            });
        }).catch((error) => {
            logger.error('> ', error)
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Falha ao iniciar aplicação!`
                }]
            });
        });
    }
}