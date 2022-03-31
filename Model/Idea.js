const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Controller/connection');

class Idea extends Model {
    static upvote(body, models) {
        return models.Upvote.create({
            userkey: body.userkey,
            ideakey: body.ideakey
        }).then(() => {
            return Idea.findOne({
                where: {
                    id: body.id
                },
                attributes: [
                    'id',
                    'title',
                    'coding_languages', 
                    'keywords',
                    'short_text',
                    'text',
                    'idea_type',
                    'offer_type',
                    'userkey',
                    'created_at',
                    [sequelize.literal('(SELECT COUNT(*) FROM upvote WHERE idea.id = upvote.ideakey)'), 'upvote_count']
                ],
                include: [
                    {
                        model: models.Comment,
                        attributes: ['id','text', 'userkey', 'ideakey', 'created_at'],
                        include: {
                            model: models.User,
                            attributes: ['name']
                        }
                    }
                ]
            });
        });
    }
}

Idea.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coding_languages: {
            type: DataTypes.STRING,
            // Will pick from dropdown?
            allowNull: true
        },
        keywords: {
            type: DataTypes.STRING,
            // Should this be string
            allowNull: true
        },
        short_text: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: true,
            // validate: {
            //     len: [1]
            // }
        },
        idea_type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        offer_type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        offer_value: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userkey: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'idea'
    }
);

module.exports = Idea;
