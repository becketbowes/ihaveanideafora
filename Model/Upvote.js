const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Controller/connection');

class Upvote extends Model {}

Upvote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userkey: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        ideakey: {
            type: DataTypes.INTEGER,
            references: {
                model: 'idea',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'upvote'
    }
);

module.exports = Upvote;