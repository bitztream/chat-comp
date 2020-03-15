const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/chat', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;

const user = new mongoose.Schema({
  name: String,
  type: String,
  url: String,
  avatar: String,
  splash: String,
  badges: Array
});

const msg = new mongoose.Schema({
  user: user,
  text: String
});

const chat = new mongoose.Schema({
  room: Number,
  owner: String,
  mods: [user],
  vips: [user],
  users: [user],
  msgs: [msg]
});

let Chats = mongoose.model('Chats', chat);

let getChat = (num) => {
  return new Promise((resolve, reject) => {
    Chats.find({room: num}, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = { getChat };
