const router = require('express').Router();
const { Comment } = require('../../Model');
const withAuth = require('../../utils/withAuth');

// Get all Comments
router.get('/', (req, res) => {
Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

// Get Comment by id
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });
    

// Post new Comment
router.post('/', withAuth, (req, res) => {
    Comment.create ({
        text: req.body.text,
        userkey: req.session.userkey,
        ideakey: req.body.ideakey
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
    console.log(err);
    res.status(400).json(err);
    });
});

// Update Comment
router.put('/:id', withAuth, (req, res) => {
    Comment.update (
        {
            text: req.body.text
        },
        {
            where: {
                id: req.params.id
            }
        }
        )
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
    console.log(err);
    res.status(400).json(err);
    });
});

// Delete Comment
router.delete('/:id', withAuth, (req, res) => {
Comment.destroy({
    where: {
    id: req.params.id
    }
})
    .then(dbCommentData => {
    if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
    }
    res.json(dbCommentData);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

module.exports = router;