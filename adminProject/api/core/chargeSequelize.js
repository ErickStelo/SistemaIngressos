/**
 * @description Cria a instância do sequelize e carrega todas as models do modulos
 * @returns {Object} Retorna a instancia do Sequelize e models carregadas
 */

const fs = require('fs');
const path = require('path');
const { Op } = require("sequelize");
var orm = {};

module.exports = new Promise(async (resolve, reject) => {
    const Sequelize = require('sequelize');
    const dbConfig = require('./dbConfig');
    global.$op = Op;

    const sequelize = new Sequelize(dbConfig);
    var models = {};
    try {
        await sequelize.authenticate();
        const modulesFolder = path.join(__dirname, '../modules')
        fs.readdirSync(modulesFolder).forEach(moduleFolder => {
            if(fs.existsSync(path.join(modulesFolder + '/' + moduleFolder + '/models'))){
                let modelPathModule = path.join(modulesFolder + '/' + moduleFolder + '/models')
                fs.readdirSync(modelPathModule).forEach(modelFile => {
                    const model = require(path.join(modelPathModule + '/' + modelFile)).instanceModel(sequelize);
                    models[model.name] = model;
                })
            }
        })
        fs.readdirSync(modulesFolder).forEach(moduleFolder => {
            if(fs.existsSync(path.join(modulesFolder + '/' + moduleFolder + '/models'))){
                let modelPathModule = path.join(modulesFolder + '/' + moduleFolder + '/models')
                fs.readdirSync(modelPathModule).forEach(modelFile => {
                    if(require(path.join(modelPathModule + '/' + modelFile)).associations){
                        require(path.join(modelPathModule + '/' + modelFile)).associations(models)
                    }
                })
            }
        })

        resolve({
            model: models,
            sequelize: sequelize
        })

    } catch (error) {
        console.error('Falha ao conectar com o BD / Falha ao carregar models > ', error.message);
        process.exit(1);
    }


})