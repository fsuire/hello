
const PDI = require('pdi-js')

async function serve() {
  // ---------- CONFIGURE PDI
  const pdi = new PDI(__dirname, '.service')
  PDI.setStaticDi(pdi)

  // ---------- CONFIGURE EXPRESS
  const http = await pdi.get('server/http')

  http.listen(process.env.HTTP_PORT, async () => {
    console.info(`app listening on port ${process.env.HTTP_PORT}!`)
   })
}

module.exports = serve
