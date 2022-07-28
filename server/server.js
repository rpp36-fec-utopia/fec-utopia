const express = require('express');
const axios = require('axios');
const expressStaticGzip = require('express-static-gzip');
require('dotenv').config();
const AUTH_TOKEN = process.env.TOKEN;
const app = express();
const port = 3000;

app.use('/', expressStaticGzip('client/dist'));

app.use(express.static('client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp`;

app.get('/products', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.get(`${url}/products`)
  .then(result => res.send(result.data))
  .catch(err => {console.log('/products error!'); res.sendStatus(500)})
})

app.post('/reviews/meta', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.get(`${url}/reviews/meta?product_id=${req.body['product_id']}`)
   .then((result) => {
    console.log('these are the results', result)
    res.status(200).send(result)
   })
   .catch((err) => {
    res.sendStatus(500)
   })
})

app.post('/products/related', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.get(`${url}/products/${req.body['product_id']}/related`)
  .then((result) => {
    res.status(200).send(result.data)
  })
  .catch(err => res.sendStatus(500))
})

app.post('/products/id', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.get(`${url}/products/${req.body['product_id']}`)
  .then(result => res.send(result.data))
  .catch(err => res.sendStatus(500))
})

app.get('/products/id', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios({
    baseURL: url,
    url: `/products/${req.query.id}`,
    method: 'get',
  })
  .then ((result) => {
    res.send(result.data);
  })
  .catch((err) => {
    res.sendStatus(500);
  })
})

app.get('/reviews/star', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios({
    baseURL: url,
    url: '/reviews/meta',
    method: 'get',
    params: req.query,
  })
  .then((result) => {
    res.send(result.data);
  })
  .catch(err => res.sendStatus(500));
})

app.post('/products/styles', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.get(`${url}/products/${req.body['product_id']}/styles`)
  .then(result => res.send(result.data))
  .catch(err => res.sendStatus(500))
})

app.post('/qa/questions', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.get(`${url}/qa/questions/?product_id=${req.body['product_id']}`)
  .then(result => res.send(result.data))
  .catch(err => res.sendStatus(500))
})

app.post('/qa/questions/helpful', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.put(`${url}/qa/questions/${req.body['question_id']}/helpful`)
  .then(result => res.status(204).send('Helpful'))
})

app.post('/qa/answers/helpful', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.put(`${url}/qa/answers/${req.body['answers_id']}/helpful`)
  .then(result => res.status(204).send('Helpful'))
  .catch(err => console.log('QA helpful error!'))
})

app.post('/qa/answers/report', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.put(`${url}/qa/answers/${req.body['answers_id']}/report`)
  .then(result => res.status(204).send('Reported'))
  .catch(err => console.log('QA report error!'))
})

app.post('/qa/questions/add', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.post(`${url}/qa/questions`, {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.product_id
  })
  .then(result => res.sendStatus(201))
  .catch(err => res.sendStatus(500))
})

app.post('/qa/answers/add', (req, res) => {
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  console.log('HERE IS THE QUESTION ID: ', req.body.question_id)
  axios.post(`${url}/qa/questions/${req.body.question_id}/answers`, {
    body: req.body.body,
    name: req.body.name,
    email: req.body.email
  })
  .then(result => res.sendStatus(201))
  .catch(err => res.sendStatus(500))
})

app.listen(port, () => {
  console.log('listening on port: ', port);
});