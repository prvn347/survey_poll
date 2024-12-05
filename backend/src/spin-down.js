const axios = require("axios");

const url = `https://survey-poll-backend.onrender.com`;

const interval = 3000;

 function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log(
        `Reloaded at ${new Date().toISOString()}: Status Code ${
          response.status
        }`
      );
    })
    .catch((error) => {
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.message
      );
    });
}

setInterval(reloadWebsite, interval);


module.exports = {
    reloadWebsite
  };
  