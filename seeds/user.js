const {} = require("sequelize/types/query-types");
const sequelize = require("../Controller/connection");

const userdata = [
  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Ahdfsdkh sjdhfjksh ksdhkfhskjh kjshdfjh.",
  },
  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Qwoueh dfljghgf oruetye.",
  },
  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Hgljkgjk lghjkgj dkfjghhfd rueytyre eriutyuret.",
  },
  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Yupo ueryt ajgsdjas ptoriyop.",
  },
  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Tfdytf iofdus kfgjkle.",
  },
  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Hiehuur keljrkej uhruieh slkdjf eir.",
  },

  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Yruet dkjsfh wieyrg oiewru ewioruiewu.",
  },
  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Hsdgf ewyr weuyrt lkdjf oewiurusf.",
  },
  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Ieuwyr ewyrg ahsgd weoirujkl skldjfie.",
  },
  {
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
    aboutme: "Bcvegrh qweopifg lkjuesbs kljdfoiwejr.",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
