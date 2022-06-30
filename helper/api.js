const axios = require('axios');
const config = require('../config.js');

let getAPI = () => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp36/`,
    method: 'get',
    headers: {
      // 'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios(options);
}

module.exports.getAPI = getAPI;