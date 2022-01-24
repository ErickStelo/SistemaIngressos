const {DataTypes} = require('sequelize')
const moment = require('moment');

module.exports = {
    instanceModel: function(sequelize){
        const Model = sequelize.define('Evento', {
            eve_codigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            eve_nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            eve_data:{
                type: DataTypes.DATE,
                allowNull: true
            },
            eve_local:{
                type: DataTypes.STRING,
                defaultValue: null,
            },
            eve_descricao:{
                type: DataTypes.TEXT,
                defaultValue: null
            },
        },{
            tableName: 'evento',
            schema: 'public',
            createdAt: false,
            updatedAt: false,
            deletedAt: false,
        });
        return Model;
    }
}