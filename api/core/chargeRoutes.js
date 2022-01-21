/**
 * @description Arquivo responsavel por carregar no express todas as rotas dos módulos
 * @param app Express App instance
 */

const fs = require('fs');
const path = require('path');

module.exports = async (app) =>{

    const modulesFolder = path.join(__dirname, '../modules')
    fs.readdirSync(modulesFolder).forEach(folderModule =>{
        if(fs.existsSync(path.join(modulesFolder + '/' + folderModule + '/routes.js'))){
            let routerFilePath = path.join(modulesFolder + '/' + folderModule + '/routes.js')
            app.use(require(routerFilePath))
        }
    })
}