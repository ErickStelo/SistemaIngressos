const router = require('express-promise-router')();
const ctr = require('./controller');

router.get('/indexEventos', ctr.index);
router.get('/editEvento/:eve_codigo', ctr.edit);
router.post('/updateEvento', ctr.update);
router.post('/saveEvento', ctr.save);
router.get('/deleteEvento/:eve_codigo', ctr.delete);

module.exports = router;