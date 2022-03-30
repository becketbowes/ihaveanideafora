const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Controller/connection');

class Conversation extends Model {}

// let's make Conversation and Message two different Models.
// Message is like Comment with convokey instead of ideakey
// Conversation hasMany Message
// Message belongsTo Conversation
// User hasMany Message
// Message belongs to User
// get Conversation by ID renders convo handlebars
// Includes all messages
// Message has senderkey that might match req.session.userkey
// If matches, then they get corresponding class
// to view Conversation, req.session.userkey must match either inventorkey or coderkey

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
        // inventorText: {
        //     type: DataTypes.TEXT,
        //     allowNull: true
        // },
        coderkey: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'user', 
                key: 'id' 
            }
        },
        inventorkey: {
            type: DataTypes.INTEGER,
            references: { 
                model: 'user', 
                key: 'id' 
            }
        },
        read: {
            type: DataTypes.BOOLEAN,
            allowNull: true
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