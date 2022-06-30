const express = require('express');
const axios = require('axios');
const api = require('../helper/api.js')
const app = express();
const port = 3000;

app.use(express.static('client/dist/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/qa/questions', (req, res) => {
  // api.getAPI()
  // .then(result => console.log(result));
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log('listening on port: ', port);
});