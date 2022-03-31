const router = require('express').Router();
const sequelize = require('./connection');
const { Idea, User, Comment, Conversation, Upvote } = require('../Model');

//get Conversation by user

router.get('/', (req, res) => {
    Conversation.findAll({
        where: {
            // id: req.params.id,
            receiverKey: req.session.userkey
            // receiverKey: req.params.id
        },
        attributes: ['id', 'text', 'receiverKey', 'senderKey', 'created_at'],
        include: [
            {
                model: User,
                // where: {
                //     // id: req.session.userkey
                //     id: req.params.id
                // },
                attributes: ['name'],
                // foreignKey: 'senderKey'
            },
        //     {
        //         model: User,
        //         where: {
        //             id: 'senderKey'
        //         },
        //         attributes: ['name']
        //     }
        ]
    })
        .then(dbConversationData => res.json(dbConversationData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });
    

    module.exports = router;