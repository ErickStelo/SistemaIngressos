const {DataTypes} = require('sequelize')
const moment = require('moment');

module.exports = {
    instanceModel: function(sequelize){
        const Model = sequelize.define('Usuarios', {
            usu_codigo: {
                type: DataTypes.STRING,
                primaryKey: true,
                autoIncrement: true
            },
            usu_username:{
                type: DataTypes.STRING,
                allowNull: false
            },
            usu_password:{
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            pro_codigo:{
                type: DataTypes.INTEGER,
                defaultValue: null,
                onDelete: 'Cascade'
            },
            usu_admin:{
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            usu_bloquearlogin:{
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            usu_dtcriacao:{
                type: DataTypes.DATE,
                defaultValue: moment()
            }
        },{
            tableName: 'usuario',
            schema: 'public',
            createdAt: false,
            updatedAt: false,
            deletedAt: false,
        });
        return Model;
    },
    associations: function(models){
        models.Usuarios.belongsTo(models.Promoter,{
            as:'Promoter',
            foreignKey: 'pro_codigo'
        })
    } 
}