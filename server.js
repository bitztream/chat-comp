const express = require('express');
const app = express();

const db = require('./db/chat.js');

app.get('/api', (req, res) => {
  db.getChat(req.query.room)
    .then((chats, err) => {
      if (err) {
        console.log(err);
      } else {
        res.send(chats);
      }
    })
});

app.listen(8000);

console.log('Listening on port 8000...');
