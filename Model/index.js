const Idea = require('./Idea');
const User = require('./User');
const Comment = require('./Comment');
const Upvote = require('./Upvote');
const Conversation = require('./Conversation');

User.hasMany(Idea, { foreignKey: 'userkey', onDelete: 'SET NULL' });
User.belongsToMany(Idea, { through: Upvote, as: 'upvoted_ideas', foreignKey: 'userkey', onDelete: 'SET NULL' });
User.hasMany(Conversation, { foreignKey: 'userkey', onDelete: 'SET NULL' });
User.hasMany(Comment, { foreignKey: 'userkey', onDelete: 'SET NULL' });
User.hasMany(Upvote, { foreignKey: 'userkey', onDelete: 'SET NULL' });
User.belongsToMany(User, {through: Conversation, as: 'talks_with', foreignKey: 'receiverKey', onDelete: 'SET NULL'});
User.hasMany(Conversation, { foriegnKey: 'userkey', onDelete: 'SET NULL'});
Idea.belongsTo(User, { foreignKey: 'userkey', onDelete: 'SET NULL' });
Idea.belongsToMany(User, { through: Upvote, as: 'upvoted_ideas', foreignKey: 'ideakey', onDelete: 'SET NULL' });
Idea.hasMany(Comment, { foreignKey: 'ideakey', onDelete: 'SET NULL' });
Idea.hasMany(Upvote, { foreignKey: 'ideakey', onDelete: 'SET NULL' });
Comment.belongsTo(User, { foreignKey: 'userkey', onDelete: 'SET NULL' });
Comment.belongsTo(Idea, { foreignKey: 'ideakey', onDelete: 'SET NULL' });
Upvote.belongsTo(Idea, { foreignKey: 'ideakey', onDelete: 'SET NULL' });
Upvote.belongsTo(User, { foreignKey: 'userkey', onDelete: 'SET NULL' });
Conversation.belongsTo(User, { foreignKey: 'receiverKey', onDelete: 'SET NULL' });
Conversation.belongsTo(User, { foreignKey: 'senderKey', onDelete: 'SET NULL' });

module.exports = { User, Idea, Upvote, Comment, Conversation };