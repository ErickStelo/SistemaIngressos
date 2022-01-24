const {DataTypes} = require('sequelize')
const moment = require('moment');

module.exports = {
    instanceModel: function(sequelize){
        const Model = sequelize.define('EventoPromoters', {
            evp_codigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            eve_codigo:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            pro_codigo:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },{
            tableName: 'evento_promoters',
            schema: 'public',
            createdAt: false,
            updatedAt: false,
            deletedAt: false,
        });

        console.log(sequelize.models);

        return Model;
    },
    associations: function(models){
        models.EventoPromoters.belongsTo(models.Promoter,{
            as:'Promoter',
            foreignKey: 'pro_codigo'
        })
    } 
}