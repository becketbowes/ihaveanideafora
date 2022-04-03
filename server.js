require('dotenv').config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const cloudinary = require("cloudinary").v2;

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./Controller/connection");
const { strictEqual, strict } = require('assert');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  samesite: strict,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const ourCloud = cloudinary.config({
  cloud_name: 'ideafora',
  apikey: process.env.CLOUDKEY,
  api_secret: process.env.CLOUDSECRET,
  secure: true
});

app.use(session(sess));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/Views");
app.set("cloudinary", ourCloud);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "Views/public")));

app.use(require("./Controller/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening!"));
});
