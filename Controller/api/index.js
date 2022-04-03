const router = require('express').Router();

const userRoutes = require('./user-routes');
const ideaRoutes = require('./idea-routes');
const commentRoutes = require('./comment-routes');
const ConversationRoutes = require('./conversation-routes');

router.use('/users', userRoutes);
router.use('/ideas', ideaRoutes);
router.use('/comments', commentRoutes);
router.use('/conversations', ConversationRoutes);

module.exports = router;