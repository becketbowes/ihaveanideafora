const router = require('express').Router();
const sequelize = require('./connection');
const { Idea, User, Comment, Upvote, index } = require('../Model');

router.get('/offer', (req,res) => {
    Idea.findAll({
        where: { offer_type: req.params.offer },
        order: ['upvoted_ideas', 'DESC'],
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
        include: [{ model: User, attributes: ['name', 'id'] }, { model: Comment, attributes: ['id'] }]
    })
    .then(data => {
        if (!data) { res.status(404).json({ message: 'file not found' }); return; } 
        const offerideas = data.map(idea => idea.get({ plain: true })); 
        res.render('ideas', { offerideas, })
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
})

module.exports = router;