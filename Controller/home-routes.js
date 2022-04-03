const router = require('express').Router();
const sequelize = require('./connection');
const { Idea, User, Comment, Upvote, Conversation } = require('../Model');
const withAuth = require('../utils/withAuth');

router.get('/', (req,res) => {
    Idea.findAll({
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'offer_value', 'userkey', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['name']
            },
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['name']
                }
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
            loggedIn: req.session.loggedIn,
            username: req.session.username
        });
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
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'offer_value', 'userkey', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['name', 'id']
            },
            {
            model: Comment,
            attributes: ['text', 'created_at'],
            include: {
                model: User,
                attributes: ['name']
            }
        }
    ]
    })
        .then(dbIdeaData => {
            if (!dbIdeaData) {
                res.status(404).json({ message: 'No idea found with this information' });
                return;
            }

            const idea = dbIdeaData.get({ plain: true })

            res.render('idea', { idea, lightpage: false, loggedIn: req.session.loggedIn, username: req.session.username })
            // res.json(dbIdeaData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

router.get('/login', (req,res) => {
    res.render('login', { noNav: true, lightpage: true, loggedIn: req.session.loggedIn })
})

router.get('/polite', withAuth,  (req,res) => {
    res.render('polite', { lightpage: false, loggedIn: req.session.loggedIn, username: req.session.username })
})

router.get('/politetest', withAuth, (req,res) => {
    res.render('politetest', { lightpage: false, loggedIn: req.session.loggedIn, username: req.session.username })
})

router.get('/faq', (req,res) => {
    res.render('faq', { lightpage: true, loggedIn: req.session.loggedIn, username: req.session.username })
})

router.get('/compose', withAuth, (req,res) => {
    res.render('compose', { lightpage: false, loggedIn: req.session.loggedIn, username: req.session.username })
})

router.get('/find', (req,res) => { 
    res.render('ideas', { lightpage: false, loggedIn: req.session.loggedIn, username: req.session.username, findidea: true })
})

router.get('/user', withAuth, (req,res) => { 
    User.findOne({
        where: {
            id: req.session.userkey
        },
        attributes: ['id', 'name', 'image', 'role', 'aboutme'],
        include: [
            {
                model: Conversation,
                attributes: ['id', 'text', 'receiver_key', 'sender_key', 'read', 'created_at'],
                include: {
                    model: User,
                    attributes: ['id', 'name'],
                    // keys: 'receiverKey'
                }
            },
            {
                model: Idea,
                attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
                include: {
                    model: Comment,
                    attributes: ['text', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['name']
                    }
                }
            }
        ]
    })
    .then(dbUserData => {
        const user = dbUserData.get({ plain: true });
    
        res.render('user', { user, lightpage: false, loggedIn: req.session.loggedIn, username: req.session.username });
    });
});

router.get('/useredit', withAuth, (req,res) => { 
    User.findOne({
        where: {
            id: req.session.userkey
        },
        attributes: ['id', 'name', 'image', 'role', 'aboutme'],
        include: [
            {
                model: Conversation,
                attributes: ['id', 'text', 'receiver_key', 'sender_key', 'read', 'created_at'],
                include: {
                    model: User,
                    attributes: ['id', 'name'],
                    // keys: 'receiverKey'
                }
            },
            {
                model: Idea,
                attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
                include: {
                    model: Comment,
                    attributes: ['text', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['name']
                    }
                }
            }
        ]
    })
    .then(dbUserData => {
        const user = dbUserData.get({ plain: true });
        
   
        res.render('useredit', { user, lightpage: false, loggedIn: req.session.loggedIn, username: req.session.username });
    });
});

router.get('/user/:id', withAuth, (req,res) => { 

    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'name', 'image', 'role', 'aboutme'],
        include: [
            {
                model: Conversation,
                attributes: ['id', 'text', 'receiver_key', 'sender_key', 'read', 'created_at'],
            },
            {
                model: Idea,
                attributes: ['id', 'title', 'short_text']
            }
        ]
    })
    .then(dbUserData => {
        const user = dbUserData.get({ plain: true });
        res.json(dbUserData);
    });
});

// THE NEW GET ROUTES
router.get('/user-update/', withAuth, (req,res) => { 
    User.findOne({
        where: {
            id: req.session.userkey
        },
        attributes: ['id', 'email', 'name', 'image', 'role', 'aboutme']
    })
    .then(dbUserData => {
        const user = dbUserData.get({ plain: true });
        res.render('user-update', { user, lightpage: false, loggedIn: req.session.loggedIn, username: req.session.username });
    });
});

// THE NEW PUT ROUTE
router.put('/user-update', withAuth, (req,res) => { 
    User.update( { role: req.body.role,  }, {
        individualHooks: true,
        where: {
            id: req.session.userkey,

        }
    })
    .then(dbUserData => {
        // const user = dbUserData.get({ plain: true });
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/user-update-image', withAuth, (req,res) => { 
    User.update( { image: req.body.image }, {
        individualHooks: true,
        where: {
            id: req.session.userkey,

        }
    })
    .then(dbUserData => {
        // const user = dbUserData.get({ plain: true });
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;