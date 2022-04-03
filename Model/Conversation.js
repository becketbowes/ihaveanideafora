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
        text: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        sender_key: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'user', 
                key: 'id' 
            }
        },
        receiver_key: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'user', 
                key: 'id' 
            }
        },
        read: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
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