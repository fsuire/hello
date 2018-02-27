const oauth = require('./oauth/router')

const routes = () => ([
  {
    path: '/oauth',
    router: oauth
  }
])

routes.cache = true
module.exports = routes
