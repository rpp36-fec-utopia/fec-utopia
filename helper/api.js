const axios = require('axios');
const config = require('../config.js');

let getAPI = () => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp36/`,
    method: 'get',
    headers: {
      // 'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    }
  };
  return axios(options);
}

module.exports.getAPI = getAPI;