const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/chat', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const list = [
  "001sagi001",
  "04someone04",
  "0_kan3nas",
  "0_miniminter_0",
  "0ct4gon",
  "0monstro233243",
  "0ouo0",
  "0pticpandas",
  "0samangel0",
  "0x626f74",
  "1011041989",
  "101_medic",
  "10gunner10",
  "123456ygh",
  "123dj321",
  "124362630",
  "12cmporemfatal",
  "1337maniac",
  "13litz13allin",
  "16hammers16",
  "1_1gorehowl",
  "1_or_2",
  "1_rose_knight",
  "1angelz",
  "1boks1",
  "1dalism",
  "1greatone",
  "1heend_",
  "1jc1",
  "1maddtatt",
  "1me2nice3sky4coulours",
  "1mppis",
  "1neuron1",
  "1percentseth",
  "1readmyname",
  "1rekk",
  "1remove",
  "1tryllemanden",
  "1ygsk",
  "21after3yr",
  "21pinklord",
  "2305turker",
  "23mcris",
  "24voltageplayer",
  "29111970",
  "2b3astly",
  "2catcat",
  "2fast4you696",
  "2methcookies",
  "2telepatas",
  "2ultima_",
  "310spagett",
  "321liftoff",
  "35wang35",
  "360_n0sc0pe",
  "3adoolii",
  "3boochi_",
  "3erfan3",
  "3euro_aldigutschein",
  "3mmora993",
  "3rrmag3rrd",
  "3sixty__no__scope",
  "45thjohn",
  "494akali",
  "4thshotcrits",
  "4urtle",
  "50calodin",
  "50rice",
  "510sportiva",
  "547joex",
  "58helios",
  "5anfouussaftw",
  "5pecialkay",
  "60502abc",
  "666demonjester",
  "66bluemoon66",
  "66crisis",
  "7252036141",
  "775anthonymike",
  "7human7",
  "7mardek7",
  "7rex256",
  "808rich",
  "89craven89",
  "8ip2000",
  "92littelman",
  "95tim95",
  "990049",
  "a09820109_jerry",
  "a1exstam",
  "a1s4aaron",
  "a4260684",
  "a5972",
  "a_2the_kiza",
  "a_a_ron91",
  "a_bootyhole",
  "a_boring_life",
  "a_cheesytaco",
  "fat_dab_420",
  "a_maksimoviiic",
  "aachang10"
]

const user = new mongoose.Schema({
  name: String,
  type: String,
  url: String,
  avatar: String,
  splash: String,
  badges: Array
});

let avatars = ['pink.png', 'blue.png', 'purple.png', 'orange.png'];
let splash = ['blank.png', 'one.png', 'two.png', 'three.png'];
let badges = ['', 'badge1.png', '', '', '', '', '', 'badge3.png', '', ''];

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

let db = mongoose.connection;

let Chats = mongoose.model('Chats', chat);

let modList = new Array(Math.floor(1 + Math.random() * 10)).fill(1);

console.log(modList);

let vipList = new Array(10).fill(1);

console.log(vipList);

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
 
  console.log('Connected to mongo.');
  console.log("Seeding, I'll tell you when it's done.");

  let chatList = list.map((name, x)=>{
  
    let userLocal = list.map((name, x)=>{

      var av = Math.floor((Math.random() * 4));
      var b = Math.floor((Math.random() * 4));
      var s = Math.floor((Math.random() * 10));

      return {
        name,
        type: 'user',
        url: 'https://www.twitch.tv/' + name,
        avatar: avatars[av],
        splash: splash[s],
        badges: [badges[b]]
      };
    });

    let msgLocal = list.map((name, x)=>{
      return {
        user: userLocal[x],
        text: (Math.floor(Math.random()*9) % 7 === 0) ? faker.lorem.sentence() : faker.lorem.sentences()
      }
    });

    let vipLocal = vipList.map((name, x)=>{

      var av = Math.floor((Math.random() * 4));
      var b = Math.floor((Math.random() * 4));
      var s = Math.floor((Math.random() * 10));
      
      name = Math.floor((Math.random() * list.length));
      name = list[name];
      
      return {
        name,
        type: 'vip',
        url: 'https://www.twitch.tv/' + name,
        avatar: avatars[av],
        splash: splash[s],
        badges: [badges[b]]
      };
    });
    
    let modLocal = modList.map((name, x)=>{

      var av = Math.floor((Math.random() * 4));
      var b = Math.floor((Math.random() * 4));
      var s = Math.floor((Math.random() * 10));

      name = Math.floor((Math.random() * list.length));
      name = list[name];
 
      return {
        name,
        type: 'moder',
        url: 'https://www.twitch.tv/' + name,
        avatar: avatars[av],
        splash: splash[s],
        badges: [badges[b]]
      };
    });    

    return {
      room: x,
      owner: name,
      mods: modLocal,
      vips: vipLocal,
      users: userLocal,
      msgs: msgLocal
    };
  });
 
  Chats.insertMany(chatList, function(err, response) {
    if (err) { 
      console.log(err);
    } else {
      console.log('Done!');
			return process.exit();
    }
  });
});
