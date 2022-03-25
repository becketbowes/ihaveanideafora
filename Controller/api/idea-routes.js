const router = require('express').Router();
const { Idea } = require('../../Model/Idea');


// POST to Create Idea 
router.post('/' , (req, res) => {
    // Expects { title: , coding_languages: , text: , }
    // Should this route also expect { keywords: , userkey: ,? }
    Idea.create({
        title: req.body.title,
        coding_languages: req.body.coding_languages,
        text: req.body.text,
    })
        .then(dbIdeaData => res.json(dbIdeaData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET to Find One Idea 
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id,
            username: req.params.username,
            keywords: req.params.keywords
        }
    })
        .then(dbIdeaData => {
            if (!dbIdeaData) {
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

// PUT to Update Idea
router.put('/:id', (req, res) => {
    Idea.update(res.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbIdeaData => {
        if(!dbIdeaData[0]) {
            res.status(404).json({ message: 'No idea found with this information' });
        }
        res.json(dbIdeaData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE to Remove Idea  
router.delete('/:id', (req, res) => {
    Idea.destory({
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