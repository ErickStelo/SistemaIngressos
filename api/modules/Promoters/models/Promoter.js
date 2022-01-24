const {DataTypes} = require('sequelize')
const moment = require('moment');

module.exports = {
    instanceModel: function(sequelize){
        const Model = sequelize.define('Promoter', {
            pro_codigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            pro_nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            pro_telefone:{
                type: DataTypes.STRING,
                allowNull: true
            },
        },{
            tableName: 'promoter',
            schema: 'public',
            createdAt: false,
            updatedAt: false,
            deletedAt: false,
        });
        return Model;
    }
}