const router = require('express-promise-router')();
const ctr = require('./controller');

router.post('/checkLogin', ctr.checkLogin);

module.exports = router;