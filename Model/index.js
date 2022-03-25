const Idea = require('./Idea');
const User = require('./User');
const Comment = require('./Comment');
const Upvote = require('./Upvote');

User.hasMany(Idea, {
    foreignKey: 'userkey'
});

Idea.belongsTo(User, {
    foreignKey: 'userkey',
    //Do we need ONDELETE?  Should we keep ideas even if user is deleted?
});

User.belongsToMany(Idea, {
    through: Upvote,
    as: 'upvoted_ideas',
    foreignKey: 'userkey',
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
    foreignKey: 'userkey'
});

Idea.hasMany(Upvote, {
    foreignKey: 'ideakey'
});

Comment.belongsTo(User, {
    foreignKey: 'userkey',
    //Same question Re: ONDELETE
});

Comment.belongsTo(Idea, {
    foreignKey: 'ideakey',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'userkey'
    //Same onDelete question
});

Idea.hasMany(Comment, {
    foreignKey: 'ideakey'
});

module.exports = { User, Idea, Upvote, Comment };