const router = require('express').Router();
const sequelize = require('./connection');
const { Idea, User, Comment, Upvote, index } = require('../Model');

router.get('/offer/:offer', (req,res) => {
    Idea.findAll({
        where: { offer_type: req.params.offer },
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
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
            }
        ]
    })
    .then(dbIdeaData => {
        const ideas = dbIdeaData.map(idea => idea.get({ plain: true })).reverse();
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

router.get('/category/:category', (req,res) => {
    Idea.findAll({
        where: { idea_type: req.params.category },
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
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
            }
        ]
    })
    .then(dbIdeaData => {
        const ideas = dbIdeaData.map(idea => idea.get({ plain: true })).reverse();
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

router.get('/language/:language', (req,res) => {
    Idea.findAll({
        where: { coding_languages: req.params.language },
        attributes: ['id', 'title', 'coding_languages', 'keywords', 'short_text', 'text', 'idea_type', 'offer_type', 'userkey', 'created_at'],
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
            }
        ]
    })
    .then(dbIdeaData => {
        const ideas = dbIdeaData.map(idea => idea.get({ plain: true })).reverse();
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

module.exports = router;