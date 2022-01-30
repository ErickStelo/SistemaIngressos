const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./globalConstants')

async function init() {
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(cors())

    global.logger = require('./core/logger')
    global._= require('lodash');

    var orm = await require('./core/chargeSequelize');
    app.use((req, res, next) => {
        req.orm = orm;
        require('./core/middleware')(req, res, next)
    })
    require('./core/chargeRoutes')(app);

    app.listen(config.defaultApiPort, () => {
        console.log(`> Backend Api running in http://localhost:${config.defaultApiPort}`);
    })

}

init();