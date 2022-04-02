const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const cloudinary = require("cloudinary");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./Controller/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

cloudinary.config({
  cloud_name: 'ideafora',
  apikey: process.env.CLOUDKEY,
  api_secret: process.env.CLOUDSECRET,
  secure: true
});

app.use(session(sess));
app.use(cloudinary);

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/Views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "Views/public")));

app.use(require("./Controller/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening!"));
});
