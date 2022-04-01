const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./Controller/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "I'm a million years old",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// helpers will go here!
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/Views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "views/public")));
// app.use(express.static(path.join(__dirname, "Views/public/assets/css/stylelight.css")));

app.use(require("./Controller/"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening!"));
});
