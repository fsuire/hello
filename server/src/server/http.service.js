
const express = require('express')
const cors = require('cors')

const app = async () => {
  const app = express()
  app.use(cors())

  app.get('*', async (req, res) => {
    res.send('hello')
  })

  return app
}

app.cache = true
module.exports = app
