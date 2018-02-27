
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = async ([routes]) => {
  const app = express()

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  routes.forEach((route) => {
    app.use(route.path, route.router)
  })

  app.get('*', async (req, res) => {
    res.send('hello')
  })

  return app
}

app.dependencies = ['routes/routes']
app.cache = true
module.exports = app
