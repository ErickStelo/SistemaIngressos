const {DataTypes} = require('sequelize')
const moment = require('moment');

module.exports = {
    instanceModel: function(sequelize){
        const Model = sequelize.define('EventoProdutos', {
            epr_codigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            eve_codigo:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            epr_nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
        },{
            tableName: 'evento_produtos',
            schema: 'public',
            createdAt: false,
            updatedAt: false,
            deletedAt: false,
        });

        return Model;
    },
    associations: function(models){
        models.EventoProdutos.belongsTo(models.Evento,{
            as:'Evento',
            foreignKey: 'eve_codigo'
        });

        models.EventoProdutos.hasMany(models.EventoProdutoLote,{
            as:'ProdutoLotes',
            foreignKey: 'epr_codigo'
        })
    } 
}