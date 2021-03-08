const axios = require("axios");

// Make it keep alive
const keep_alive = require("./keep_alive.js");
const config = require("./config");

const site = config.site;
const seconds = config.seconds;

setInterval(function () {
  site.forEach((url) => {
    axios
      .get(url)
      .then(console.log("Succes Pong at " + Date.now()))
      .catch(() => {});
  });
}, seconds * 1000);
