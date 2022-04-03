const router = require('express').Router();
const { User } = require('../../Model');
const withAuth = require('../../utils/withAuth');


// GET to Find All Users 
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST to Create User, Save Session
router.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        image: req.body.image,
        aboutme: req.body.aboutme
    })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.userkey = dbUserData.id;
                req.session.username = dbUserData.name;
                req.session.email = dbUserData.email;
                req.session.loggedIn = true;
            
                res.json(dbUserData)
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Post Login, Save Session
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: "no user found with this email" });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: "Incorrect password"});
            return;
        }

        req.session.save(() => {
            req.session.userkey = dbUserData.id;
            req.session.username = dbUserData.name;
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;
            
            res.json({ user: dbUserData, message: "You're logged in!"})
        });
    });
});

// Post Logout
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// Get User by ID
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update User by ID
router.put('/:id', withAuth, (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Delete User by ID
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({ where: { id: req.params.id } })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'file not found' });
                return;
            }
            res.json(data);
        })
        .catch(err => { console.log(err); res.status(500).json(err); });
});

module.exports = router;
