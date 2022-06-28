const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('../client/dist/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log('listening on port: ', port);
});