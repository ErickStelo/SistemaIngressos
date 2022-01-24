const {DataTypes} = require('sequelize')
const moment = require('moment');

module.exports = {
    instanceModel: function(sequelize){
        const Model = sequelize.define('Menus', {
            men_codigo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            men_men_codigo:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            men_nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            men_path:{
                type: DataTypes.STRING,
                allowNull: true
            },
            men_ico:{
                type: DataTypes.STRING,
                allowNull: true
            },
            men_admin:{
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
        },{
            tableName: 'menus',
            schema: 'public',
            createdAt: false,
            updatedAt: false,
            deletedAt: false,
        });

        return Model;
    },
    associations: function(models){
        models.Menus.hasMany(models.Menus,{
            as:'SubMenus',
            foreignKey: 'men_men_codigo'
        })
    } 
}