import { Router } from 'express'
import classroomRoute from './routes/classroomRoute'
import studentRoute from './routes/studentRoute'

// guaranteed to get dependencies
export default (models) => {
  const app = Router()
  classroomRoute(app, models)
  studentRoute(app, models)

  return app
}
