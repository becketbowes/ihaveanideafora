const router = require('express').Router();
// const sequelize = require('../connection');
const { Conversation, User } = require('../../Model');

//get all Conversations

router.get('/', (req, res) => {
Conversation.findAll()
    .then(dbConversationData => res.json(dbConversationData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

//post new Conversation

router.post('/', (req, res) => {
    Conversation.create ({
        text: req.body.text,
        senderKey: req.session.userkey,
        // senderKey: req.body.senderKey,
        receiverKey: req.body.receiverKey
    })
    .then(dbConversationData => res.json(dbConversationData))
    .catch(err => {
    console.log(err);
    res.status(400).json(err);
    });
});

//update Conversation

router.put('/:id', (req, res) => {
    Conversation.update (
        {
            text: req.body.text
        },
        {
            where: {
                id: req.params.id
            }
        }
        )
    .then(dbConversationData => res.json(dbConversationData))
    .catch(err => {
    console.log(err);
    res.status(400).json(err);
    });
});

//delete Conversation
router.delete('/:id', (req, res) => {
Conversation.destroy({
    where: {
    id: req.params.id
    }
})
    .then(dbConversationData => {
    if (!dbConversationData) {
        res.status(404).json({ message: 'No Conversation found with this id' });
        return;
    }
    res.json(dbConversationData);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});




module.exports = router;