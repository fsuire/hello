
const fs = require('fs-extra')
const https = require('https')

const express = require('express')

const app = async () => {
  const [ key, cert ] = await Promise.all([
    fs.readFile(`${__path.root}/keys/${process.env.NODE_ENV}.key`, 'utf8'),
    fs.readFile(`${__path.root}/keys/${process.env.NODE_ENV}.crt`, 'utf8')
  ])
  const passphrase = process.env.CERTIFICATE_PASSPHRASE
  const credentials = { key, cert, passphrase }

  const app = express()

  const httpsServer = https.createServer(credentials, app)

  app.get('/hello', async (req, res) => {
    res.json({ name: 'Hello World!'})
  })

  // error middleware
  app.use((err, req, res, next) => {
    console.log('=========================================')
    console.error(err)
    console.log('=========================================')
    res.send(err.message)
  })

  return httpsServer
}

app.cache = true
module.exports = app
