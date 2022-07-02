const express = require('express');
const axios = require('axios');
// const AUTH_TOKEN = require('../config.js');
const app = express();
const port = 3000;

app.use(express.static('client/dist/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp`;

app.get('/products', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN.TOKEN;
  axios.get(`${url}/products`)
  .then(result => res.send(result.data))
})

app.post('/qa/questions', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN.TOKEN;
  axios.get(`${url}/qa/questions/?product_id=${req.body['product_id']}`)
  .then(result => res.send(result.data))
})


app.listen(port, () => {
  console.log('listening on port: ', port);
});