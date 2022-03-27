const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Controller/connection');

class Conversation extends Model {}

Conversation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        coderText: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        inventorText: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        coderKey: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { 
                model: 'User', 
                key: 'id' 
            }
        },
        inventorKey: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { 
                model: 'User', 
                key: 'id' 
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'conversation'
    }
);

module.exports = Conversation; 