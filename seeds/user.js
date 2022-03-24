const {  } = require("sequelize/types/query-types");
const sequelize = require("../Controller/connection");

const userdata = [
  {
    username: "",
    email: "",
    password: "",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
