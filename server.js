const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  // response é a resposta, mas eu tiro o data de dentro do response (response.data)
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})
app.listen('4567')
