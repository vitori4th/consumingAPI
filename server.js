const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.send({ message: 'ok' })
})
app.listen('4567')
