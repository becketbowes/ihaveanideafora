const router = require('express').Router();
const sequelize = require('./connection');
const { Idea, User, Comment, Upvote } = require('../Model')


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

        res.render('ideas', { ideas });
        // add loggedIn: req.session.loggedIn
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
})

module.exports = router;