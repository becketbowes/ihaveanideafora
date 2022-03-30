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
        res.render('ideas', { offerideas, lightpage: true, username: req.session.username })
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
})

router.get('/category', (req,res) => {
    Idea.findAll({
        where: { idea_type: req.params.category },
        order: req.params.order,
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
        include: [{ model: User, attributes: ['name', 'id'] }, { model: Comment, attributes: ['id'] }]
    })
    .then(data => {
        if (!data) { res.status(404).json({ message: 'file not found' }); return; } 
        const categoryideas = data.map(idea => idea.get({ plain: true })); 
        res.render('ideas', { categoryideas, lightpage: true, username: req.session.username })
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
})

router.get('/language', (req,res) => {
    Idea.findAll({
        where: { coding_languages: req.params.language },
        order: req.params.order,
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
        include: [{ model: User, attributes: ['name', 'id'] }, { model: Comment, attributes: ['id'] }]
    })
    .then(data => {
        if (!data) { res.status(404).json({ message: 'file not found' }); return; } 
        const languageideas = data.map(idea => idea.get({ plain: true })); 
        res.render('ideas', { languageideas, lightpage: true, username: req.session.username })
    })
    .catch(err => { console.log(err); res.status(500).json(err); });
})

module.exports = router;