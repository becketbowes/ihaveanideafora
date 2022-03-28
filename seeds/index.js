const seedUser = require("./user");
const seedIdea = require("./idea");
const seedComment = require("./comment");

const sequelize = require("../Controller/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("----------------");
  await seedUser();
  console.log("----------------");

  await seedIdeas();
  console.log("----------------");

  await seedComments();
  console.log("---------------");

  process.exit(0);
};

seedAll();
