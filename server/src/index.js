'use strict'

const path = require('path')

const serve = require('./serve')


console.info(`Starting application in "${process.env.NODE_ENV}" environment`)

// ---------- DEFINE __path
const __path = {}
const dirnamedPath = path.dirname(__dirname)
const rootPath = dirnamedPath === '/' ? __dirname : dirnamedPath
Object.defineProperties(__path, {
  root: { value: rootPath }
})
Object.defineProperty(global, '__path', {value: __path})

;(async () => {
  try {
    await serve()
  } catch (e) {
    console.log()
    console.log('=========================================')
    console.error(e)
    console.log('=========================================')
    console.log()
  }
})()
