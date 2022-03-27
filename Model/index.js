const Idea = require('./Idea');
const User = require('./User');
const Comment = require('./Comment');
const Upvote = require('./Upvote');
const Conversation = require('./Conversation');

User.hasMany(Idea, {
    foreignKey: 'userkey',
    onDelete: 'SET NULL'
});

Idea.belongsTo(User, {
    foreignKey: 'userkey',
    onDelete: 'SET NULL'
    // Do we need ONDELETE?  Should we keep ideas even if user is deleted?
});

User.belongsToMany(Idea, {
    through: Upvote,
    as: 'upvoted_ideas',
    foreignKey: 'userkey',
    onDelete: 'SET NULL'
    // We should match previous ONDELETE decision
});

Idea.belongsToMany(User, {
    through: Upvote,
    as: 'upvoted_ideas',
    foreignKey: 'ideakey',
    onDelete: 'SET NULL'
});

Upvote.belongsTo(User, {
    foreignKey: 'userkey',
    onDelete: 'SET NULL'
});

Upvote.belongsTo(Idea, {
    foreignKey: 'ideakey',
    onDelete: 'SET NULL'
});

User.hasMany(Upvote, {
    foreignKey: 'userkey',
    onDelete: 'SET NULL'
});

Idea.hasMany(Upvote, {
    foreignKey: 'ideakey',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'userkey',
    onDelete: 'SET NULL'
    //Same question Re: ONDELETE
});

Comment.belongsTo(Idea, {
    foreignKey: 'ideakey',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'userkey',
    onDelete: 'SET NULL'
    //Same onDelete question
});

Idea.hasMany(Comment, {
    foreignKey: 'ideakey',
    onDelete: 'SET NULL'
});

User.belongsToMany(Conversation, {
    through: 
})

User.hasMany(Conversation, {
    foreignKey: 'userkey',
    onDelete: 'SET NULL'
});





module.exports = { User, Idea, Upvote, Comment, Conversation };