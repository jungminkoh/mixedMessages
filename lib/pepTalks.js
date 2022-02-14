module.exports = {
    0 : "It Ain’t About How Hard Ya Hit!",
    1 : "All The World Shall Be Your Enemy",
    2 : "Do Or Not Do. There Is No Try",
    3 : "We’re Going To Live On",
    4 : "Get Busy Living",
    5 : "Inch By Inch",
    6 : "Seize The Day",
    7 : "The Enemy Outnumber Us A Paltry Three To One",
    8 : "They’ll Never Take Our Freedom",
    9 : "My Name Is Inigo Montoya. You Killed My Father. Prepare To Die",
    10 : "This Day We Fight",

    getPepTalk() {
        return this[Math.floor(Math.random() * 11)];
    }
  };