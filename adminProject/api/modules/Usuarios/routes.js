const router = require('express-promise-router')();
const ctr = require('./controller');

router.get('/getUsuarios', ctr.getUsuarios);
router.get('/editUsuario/:usu_codigo', ctr.edit);
router.get('/deleteUsuario/:usu_codigo', ctr.delete);
router.post('/updateUsuario', ctr.update);
router.get('/getPromotersList', ctr.getPromotersList);
router.post('/saveUsuario', ctr.save);

module.exports = router;