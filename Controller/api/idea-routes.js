const router = require('express').Router();
const { Idea, Comment, User } = require('../../Model');
const withAuth = require('../../utils/withAuth');

// GET all ideas
router.get('/', (req,res) => {
    Idea.findAll()
    .then(dbIdeaData => res.json(dbIdeaData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
})

// POST to Create Idea 
router.post('/' , withAuth, (req, res) => {
    // Expects { title: , coding_languages: , text: , }
    // Should this route also expect { keywords: , userkey: ,? }
    Idea.create({
        title: req.body.title,
        coding_languages: req.body.coding_languages,
        keywords: req.body.keywords,
        short_text: req.body.short_text,
        text: req.body.text,
        idea_type: req.body.idea_type,
        offer_type: req.body.offer_type,
        userkey: req.session.userkey
    })
        .then(dbIdeaData => res.json(dbIdeaData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET to Find One Idea 
router.get('/:id', (req, res) => {
    Idea.findOne({
        where: {
            id: req.params.id,
            // username: req.params.username,
            // keywords: req.params.keywords
        },
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['text', 'created_at'],
                include: {
                    model: User,
                    attributes: ['name']
                }
            },
            {
                model: User,
                attributes: ['name']
            }
        ]
    })
        .then(dbIdeaData => {
            if (!dbIdeaData) {
                res.status(404).json({ message: 'No idea found with this information' });
                return;
            }

            // const idea = dbIdeaData.get({ plain: true })
            // res.render('idea', { idea, lightpage: true })
            res.json(dbIdeaData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });

// PUT to Update Idea
router.put('/:id', withAuth, (req, res) => {
    Idea.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbIdeaData => {
        if(!dbIdeaData[0]) {
            res.status(404).json({ message: 'No idea found with this information' });
        }

        // const idea = dbIdeaData.get({ plain: true })

        // res.render('edit', { idea, lightpage: true });
        res.json(dbIdeaData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE to Remove Idea  
router.delete('/:id', withAuth, (req, res) => {
    Idea.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbIdeaData => {
        if(!dbIdeaData) {
            res.status(404).json({ message: 'No idea found with this information' });
            return;
        }
        res.json(dbIdeaData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;