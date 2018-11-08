const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
// const Users = require('./models/User');
const app = express();

// mongoose.connect(keys.mongoURI);
mongoose.connect('mongodb://eventform:password1@ds155203.mlab.com:55203/form-db');

const userSchema = new mongoose.Schema({
  googleId: String
});

const Users = mongoose.model('users', userSchema);

Users.create({
  googleId: "sdfglkjhsdfgkjh123"
}, (err, createdID) => {
  if (err) {
    return err;
  } else {
    console.log(createdID);
  }
});

app.get("/user", (req, res) => {
  res.send({name: 'Gerardo Fernandez'})
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Port listening on", PORT);
});