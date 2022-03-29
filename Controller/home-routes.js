const router = require('express').Router();
const sequelize = require('./connection');
const { Idea, User, Comment, Upvote } = require('../Model');
const res = require('express/lib/response');


router.get('/', (req,res) => {
    Idea.findAll({
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['name']
            },
            {
                model: Comment,
                // attributes: ['id']
                // to identify # of Comments per post?
            }
        ]
    })
    .then(dbIdeaData => {
        const ideas = dbIdeaData.map(idea => idea.get({ plain: true })).reverse();
        // const lightPage = true;

        res.render('ideas', { 
            ideas, 
            lightpage: true,
        });
        // add loggedIn: req.session.loggedIn
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
})

router.get('/idea/:id', (req, res) => {
    Idea.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
        include: {
            model: Comment,
            attributes: ['text', 'created_at'],
            include: {
                model: User,
                attributes: ['name']
            }
        }
    })
        .then(dbIdeaData => {
            if (!dbIdeaData) {
                res.status(404).json({ message: 'No idea found with this information' });
                return;
            }

            const idea = dbIdeaData.get({ plain: true })

            res.render('idea', { idea, lightpage: false })
            // res.json(dbIdeaData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

router.get('/login', (req,res) => {
    res.render('login', { lightpage: true })
})

router.get('/polite', (req,res) => {
    res.render('polite', { lightpage: false })
})

router.get('/politetest', (req,res) => {
    res.render('politetest', { lightpage: false })
})

router.get('/faq', (req,res) => {
    res.render('faq', { lightpage: false })
})

router.get('/compose', (req,res) => {
    res.render('compose', { lightpage: false })
})

router.get('/convo', (req,res) => {
    // Conversation.findOne?
    res.render('convo', { lightpage: false })
})

module.exports = router;