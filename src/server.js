import express from 'express'
require('dotenv').config()

const port = 3000

async function startServer () {
  const app = express()
  await require('./loaders').default(app)

  app.listen(port, err => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`
      ###################################################
      🛡️  Server listening on http://localhost:${port} 🛡️ 
      ###################################################
    `)
  })
}

startServer()
