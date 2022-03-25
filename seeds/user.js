const {} = require("sequelize/types/query-types");
const sequelize = require("../Controller/connection");

const userdata = [
  {
    id: 23,
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "ahdfsdkh sjdhfjksh ksdhkfhskjh kjshdfjh",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
