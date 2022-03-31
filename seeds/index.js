const seedUsers = require("./user");
const seedIdeas = require("./idea");
const seedComments = require("./comment");

const sequelize = require("../Controller/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("----------------");

  await seedUsers();
  console.log("----------------");

  await seedIdeas();
  console.log("----------------");

  await seedComments();
  console.log("---------------");

  process.exit(0);
};

seedAll();
