const router = require('express').Router();

const viewRoutes = require('./view-routes');
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api/');

router.use('/find', viewRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
