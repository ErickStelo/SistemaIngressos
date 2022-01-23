const {DataTypes} = require('sequelize')
const moment = require('moment');

module.exports = {
    instanceModel: function(sequelize){
        const Model = sequelize.define('EventoProdutoLote', {
            epl_codigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            epr_codigo:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            epl_lote_numero:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            epl_ativo:{
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            epl_datafechamento:{
                type: DataTypes.STRING,
                allowNull: true
            },
        },{
            tableName: 'evento_produto_lote',
            schema: 'public',
            createdAt: false,
            updatedAt: false,
            deletedAt: false,
        });

        return Model;
    },
    associations: function(models){

        models.EventoProdutoLote.belongsTo(models.EventoProdutos,{
            as:'EventoProdutos',
            foreignKey: 'epr_codigo'
        })
    } 
}