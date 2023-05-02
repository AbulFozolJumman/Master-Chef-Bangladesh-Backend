const express = require('express')
const app = express()
const port = 3000;
const chefs = require('./chefs.json');

app.get('/', (req, res) => {
  res.send('Hellooo World!')
})

app.get('/chefs', (req, res) => {
  res.send(chefs);
})

app.listen(port, () => {
  console.log(`Example appp listening on port ${port}`)
})