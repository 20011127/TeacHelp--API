import cors from 'cors'
import bodyParser from 'body-parser'
import routes from '../api'

export default (app, models) => {
  // Health
  app.get('/status', (req, res) => {
    res.status(200).end()
  })

  app.head('/status', (req, res) => {
    res.status(200).end()
  })

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors())

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json())

  // Load API routes
  app.use(routes(models))
}
