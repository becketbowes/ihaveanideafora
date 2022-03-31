const { Comment } = require('../Model');

const commentdata = [
  {
    text: "Nunc rhoncus dui vel sem.",
    userkey: 1,
    ideakey: 10,
  },

  {
    text:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    userkey: 2,
    ideakey: 9,
  },
  {
    text: "Aliquam erat volutpat. In congue.",
    userkey: 3,
    ideakey: 8,
  },
  {
    text: "Vivamus vestibulum sagittis sapien.",
    userkey: 4,
    ideakey: 7,
  },
  {
    text:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    userkey: 5,
    ideakey: 6,
  },
  {
    text: "Donec ut mauris eget massa tempor convallis.",
    userkey: 6,
    ideakey: 5,
  },
  {
    text: "Integer ac leo. Pellentesque ultrices mattis odio.",
    userkey: 7,
    ideakey: 4,
  },
  {
    text:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    userkey: 8,
    ideakey: 3,
  },
  {
    text: "Vestibulum ac est lacinia nisi venenatis tristique.",
    userkey: 9,
    ideakey: 2,
  },
  {
    text: "Cras in purus eu magna vulputate luctus.",
    userkey: 10,
    ideakey: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;