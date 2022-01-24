const {DataTypes} = require('sequelize')
const moment = require('moment');

module.exports = {
    instanceModel: function(sequelize){
        const Model = sequelize.define('CategoriaPrecos', {
            cap_codigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cap_nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            
        },{
            tableName: 'categoria_preco',
            schema: 'public',
            createdAt: false,
            updatedAt: false,
            deletedAt: false,
        });
        return Model;
    }
}