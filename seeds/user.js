// const {} = require("sequelize/types/query-types");
const sequelize = require("../Controller/connection");
const { User } = require('../Model')

const userdata = [
  {
    name: "Adam",
    email: "adam.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "so tell me what you want, what you really really want, I wanna, I wanna, I wanna, I wanna, I wanna really really really wanna zigazig ha. If you wanna be my lover, you gotta get with my friends (gotta get with my friends). Make it last forever friendship never ends, If you wanna be my lover, you have got to give, Taking is too easy, but that's the way it is.",
  },
  {
    name: "Becket",
    email: "becket.com",
    password: "password",
    role: "Inventor",
    image: "",
    aboutme: "Show me how you want it to be. Tell me, baby, 'Cause I need to know now, oh, because... My loneliness is killing me (and I). I must confess, I still believe (still believe). When I'm not with you I lose my mind. Give me a sign. Hit me, baby, one more time.",
  },
  {
    name: "Claudia",
    email: "claudia.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "A lonely mother gazing out of her window Staring at a son that she just can't touch If at any time he's in a jam she'll be by his side But he doesn't realize he hurts her so much But all the praying just ain't helping at all 'Cause he can't seem to keep his self out of trouble So he goes out and he makes his money the best way he knows how Another body laying cold in the gutter Listen to me Don't go chasing waterfalls Please stick to the rivers and the lakes that you're used to I know that you're gonna have it your way or nothing at all But I think you're moving too fast.",
  },
  {
    name: "Lisa",
    email: "lisa.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "Cause the love that you gave that we made Wasn't able to make it enough for you To be open wide, no And every time you speak her name Does she know how you told me You'd hold me until you died 'Til you died, but you're still alive And I'm here, to remind you Of the mess you left when you went away It's not fair, to deny me Of the cross I bear that you gave to me You, you, you oughta know.",
  },
  {
    name: "Janelle",
    email: "janelle.com",
    password: "password",
    role: "Inventor",
    image: "",
    aboutme: "And all the roads we have to walk are winding And all the lights that lead us there are blinding There are many things that I would Like to say to you But I don't know how Because maybe You're gonna be the one that saves me And after all You're my wonderwall.",
  },
  {
    name: "Diego",
    email: "diego.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "I'm a Barbie girl, in a Barbie world Life in plastic, it's fantastic You can brush my hair, undress me everywhere Imagination, life is your creation Come on Barbie, let's go party! I'm a Barbie girl, in a Barbie world Life in plastic, it's fantastic You can brush my hair, undress me everywhere Imagination, life is your creation",
  },

  {
    name: "Jordan",
    email: "jordan.com",
    password: "password",
    role: "Inventor",
    image: "",
    aboutme: "If you wanna be with me Baby there's a price to pay I'm a genie in a bottle You gotta rub me the right way If you wanna be with me I can make your wish come true You gotta make a big impression (Oh yeah) Gotta like what you do",
  },
  {
    name: "Takuya",
    email: "takuya.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "Say my name, say my name If no one is around you Say baby I love you If you ain't runnin' game Say my name, say my name You actin' kinda shady Ain't callin' me baby Why the sudden change Say my name, say my name If no one is around you Say baby I love you If you ain't runnin' game Say my name, say my name You actin' kinda shady Ain't callin' me baby Why the sudden change",
  },
  {
    name: "Claudio",
    email: "claudio.com",
    password: "password",
    role: "Inventor",
    image: "",
    aboutme: "Don't speak I know just what you're saying So please stop explaining Don't tell me cause it hurts Don't speak I know what you're thinking I don't need your reasons Don't tell me cause it hurts",
  },
  {
    name: "Enrique",
    email: "enrique.com",
    password: "password",
    role: "Both",
    image: "",
    aboutme: "You have so many relationships in this life Only one or two will last You go through all the pain and strife Then you turn your back and they're gone so fast Oh yeah And they're gone so fast, yeah Oh So hold on the ones who really care In the end they'll be the only ones there And when you get old and start losing your hair Can you tell me who will still care Can you tell me who will still care? Oh care",
  },
  {
    name: "Samuel",
    email: "samuel.com",
    password: "password",
    role: "Coder",
    image: "",
    aboutme: "No, I don't want no scrub A scrub is a guy that can't get no love from me Hanging out the passenger side Of his best friend's ride Trying to holler at me I don't want no scrub A scrub is a guy that can't get no love from me Hanging out the passenger side Of his best friend's ride Trying to holler at me.",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;