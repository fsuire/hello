
const express = require('express')

const app = async () => {
  const app = express()

  app.get('*', async (req, res) => {
    res.send('hello')
  })

  return app
}

app.cache = true
module.exports = app
