const express = require('express')

const router = express.Router()

router.all('/', async (req, res) => {
  console.log(req.body)
  res.send('oauth test')
})

module.exports = router
