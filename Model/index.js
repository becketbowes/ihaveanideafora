const Idea = require('./Idea');
const User = require('./User');
const Comment = require('./Comment');
const Upvote = require('./Upvote');
const Conversation = require('./Conversation');

User.hasMany(Idea, { foreignKey: 'userkey', onDelete: 'SET NULL' });
User.hasMany(Comment, { foreignKey: 'userkey', onDelete: 'SET NULL' });
Idea.belongsTo(User, { foreignKey: 'userkey', onDelete: 'SET NULL' });
Idea.hasMany(Comment, { foreignKey: 'ideakey', onDelete: 'SET NULL' });
Idea.hasMany(Upvote, { foreignKey: 'ideakey', onDelete: 'SET NULL' });
Comment.belongsTo(User, { foreignKey: 'userkey', onDelete: 'SET NULL' });
Comment.belongsTo(Idea, { foreignKey: 'ideakey', onDelete: 'SET NULL' });
User.hasMany(Conversation, { foreignKey: 'receiver_key', onDelete: 'SET NULL' });
Conversation.belongsTo(User, { foreignKey: 'sender_key', onDelete: 'SET NULL' });

module.exports = { User, Idea, Upvote, Comment, Conversation };