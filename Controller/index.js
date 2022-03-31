const router = require('express').Router();

const viewRoutes = require('./view-routes');
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api/');
// const postalRoutes = require('./postal-routes');
// const dashboardRoutes = require('./dashboard-routes.js');

router.use('/find', viewRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/postal', postalRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;
