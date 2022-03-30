// const {} = require("sequelize/types/query-types");
const sequelize = require("../Controller/connection");
const { User } = require('../Model')

const userdata = [
  {
    name: "Adam",
    email: "adam.com",
    password: "password",
    role: "Both",
    image: "https://media-exp1.licdn.com/dms/image/C4E03AQEhvbxufm3bkA/profile-displayphoto-shrink_800_800/0/1639115969548?e=2147483647&v=beta&t=tWczVvb1mLUGyVkdwlo3Fjoc4zXwTFMXZiyRF4egBvc",
    aboutme: "Ahdfsdkh sjdhfjksh ksdhkfhskjh kjshdfjh.",
  },
  {
    name: "Becket",
    email: "becket.com",
    password: "password",
    role: "Inventor",
    image: "",
    aboutme: "Qwoueh dfljghgf oruetye.",
  },
  {
    name: "Claudia",
    email: "claudia.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "Hgljkgjk lghjkgj dkfjghhfd rueytyre eriutyuret.",
  },
  {
    name: "Lisa",
    email: "lisa.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "Yupo ueryt ajgsdjas ptoriyop.",
  },
  {
    name: "Janelle",
    email: "janelle.com",
    password: "password",
    role: "Inventor",
    image: "",
    aboutme: "Tfdytf iofdus kfgjkle.",
  },
  {
    name: "Diego",
    email: "diego.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "Hiehuur keljrkej uhruieh slkdjf eir.",
  },

  {
    name: "Jordan",
    email: "jordan.com",
    password: "password",
    role: "Inventor",
    image: "",
    aboutme: "Yruet dkjsfh wieyrg oiewru ewioruiewu.",
  },
  {
    name: "Takuya",
    email: "takuya.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "Hsdgf ewyr weuyrt lkdjf oewiurusf.",
  },
  {
    name: "Claudio",
    email: "claudio.com",
    password: "password",
    role: "Inventor",
    image: "",
    aboutme: "Ieuwyr ewyrg ahsgd weoirujkl skldjfie.",
  },
  {
    name: "Enrique",
    email: "enrique.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "Bcvegrh qweopifg lkjuesbs kljdfoiwejr.",
  },
  {
    name: "Samuel",
    email: "samuel.com",
    password: "password",
    role: "Coder",
    image: "",
    aboutme: "Bcvegrh qweopifg lkjuesbs kljdfoiwejr.",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
