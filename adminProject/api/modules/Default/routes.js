const router = require('express-promise-router')();
const ctr = require('./controller');

router.get('/getMenus', ctr.getMenus);
router.get('/getInitData', ctr.getInitData);


module.exports = router;