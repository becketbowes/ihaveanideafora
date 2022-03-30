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

//get Conversation by id

router.get('/:id', (req, res) => {
    Conversation.findOne({
        where: {
            id: req.params.id,
            coderkey: req.session.userkey
        },
        attributes: [
            'id', 
            'text', 
            'coderkey', 
            'inventorkey', 
            'created_at',
            // [sequelize.literal('(SELECT * FROM user WHERE user.id = conversation.inventorkey)'), 'other_user']
        ],
        include: [
            {
                model: User,
                where: {
                    id: req.session.userkey
                },
                attributes: ['name']
            },
            {
                model: User,
                where: {
                    id: req.body.inventorkey
                },
                attributes: ['name']
            }
        ]
    })
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
        coderkey: req.session.userkey,
        inventorkey: req.body.userkey
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