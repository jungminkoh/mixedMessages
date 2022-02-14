module.exports = {
    0 : "Aquarius",
    1 : "Pisces",
    2 : "Aries",
    3 : "Taurus",
    4 : "Gemini",
    5 : "Cancer",
    6 : "Leo",
    7 : "Virgo",
    8 : "Libra",
    9 : "Scorpio",
    10 : "Sagittarius",
    11 : "Capricom",

    getHoroscope() {
        return this[Math.floor(Math.random() * 12)];
    }
  };