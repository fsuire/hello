
const express = require('express')
const cors = require('cors')

const app = async ([routes]) => {
  const app = express()
  app.use(cors())

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
