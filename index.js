const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/services/service-1', (req, res) => {
  res.send('Hi from NodeJS app - V1')
})
app.get('/services/service-1/status', (req, res) => {
  res.send('ok')
})

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`)
})
