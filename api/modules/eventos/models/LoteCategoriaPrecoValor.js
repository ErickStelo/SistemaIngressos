const {DataTypes} = require('sequelize')
const moment = require('moment');

module.exports = {
    instanceModel: function(sequelize){
        const Model = sequelize.define('LoteCategoriaPrecoValor', {
            lpv_codigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            epl_codigo:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            cap_codigo:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            lpv_limiteingressos:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            lpv_valoringresso:{
                type: DataTypes.DOUBLE,
                allowNull: false
            },
        },{
            tableName: 'lote_produto_categoria_preco_valor',
            schema: 'public',
            createdAt: false,
            updatedAt: false,
            deletedAt: false,
        });

        return Model;
    },
    associations: function(models){
        models.LoteCategoriaPrecoValor.belongsTo(models.EventoProdutoLote,{
            as:'EventoProdutoLote',
            foreignKey: 'epl_codigo'
        })
        models.LoteCategoriaPrecoValor.belongsTo(models.CategoriaPrecos,{
            as:'CategoriaPrecos',
            foreignKey: 'cap_codigo'
        })
    } 
}