const { Comment } = require;

const commentdata = [
  {
    comment_text: "Nunc rhoncus dui vel sem.",
    userkey: 1,
    ideakey: 10,
  },

  {
    comment_text:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    userkey: 2,
    ideakey: 9,
  },
  {
    comment_text: "Aliquam erat volutpat. In congue.",
    userkey: 3,
    ideakey: 8,
  },
  {
    comment_text: "Vivamus vestibulum sagittis sapien.",
    userkey: 4,
    ideakey: 7,
  },
  {
    comment_text:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    userkey: 5,
    ideakey: 6,
  },
  {
    comment_text: "Donec ut mauris eget massa tempor convallis.",
    userkey: 6,
    ideakey: 5,
  },
  {
    comment_text: "Integer ac leo. Pellentesque ultrices mattis odio.",
    userkey: 7,
    ideakey: 4,
  },
  {
    comment_text:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    userkey: 8,
    ideakey: 3,
  },
  {
    comment_text: "Vestibulum ac est lacinia nisi venenatis tristique.",
    userkey: 9,
    ideakey: 2,
  },
  {
    comment_text: "Cras in purus eu magna vulputate luctus.",
    userkey: 10,
    ideakey: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
