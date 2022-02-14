const horoscopes = require('./lib/horoscopes.js');
const pepTalks = require('./lib/pepTalks.js');

console.log(`Your sign is ${horoscopes.getHoroscope()}`);
console.log(pepTalks.getPepTalk());


