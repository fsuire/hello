
const express = require('express')

const app = async () => {
  const app = express()

  app.get('*', async (req, res) => {
    const domain = req.headers.host.replace(/\:[0-9]+/, `:${process.env.HTTPS_PORT}`)

    const redirectUrl = `https://${domain}${req.url}`
    res.redirect(308, redirectUrl)
  })

  return app
}

app.cache = true
module.exports = app
