import express from 'express'
import initRoutes from './api/routes/initRoutes'
require('dotenv').config()

const app = express()
const port = 3000

initRoutes(app)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
