const express = require('express')

const router = express.Router()

router.all('/', async (req, res) => {
  res.send('oauth test')
})

module.exports = router
