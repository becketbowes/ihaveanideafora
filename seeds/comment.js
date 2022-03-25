const { Comment } = require;

const commentdata = [
  {
    id: 1,
    text: "kajsdhjksahdjsa",
    userkey: 12,
    ideakey: 192,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
