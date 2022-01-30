const router = require('express-promise-router')();
const ctr = require('./controller');

router.get('/indexPromoters', ctr.index);
router.get('/editPromoter/:pro_codigo', ctr.edit);
router.post('/updatePromoter', ctr.update);
router.post('/savePromoter', ctr.save);
router.get('/deletePromoter/:pro_codigo', ctr.delete);

module.exports = router;