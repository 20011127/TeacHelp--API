import validators from '../middleware/validators'

export default function (app, models) {
  app.route('/classrooms')
    .get(async (req, res) => {
      const test = await models.classroom.findAll()
      res.send(test)
    })
    .post(validators.saveClassroomValidator,
      async (req, res) => {
        try {
          const classroomToSave = models.classroom.build(req.body)
          const classroomSaved = await classroomToSave.save()
          res.send(201, classroomSaved)
        } catch (error) {
          console.error(error)
          res.send(500, {
            status: 500,
            message: error.message
          })
        }
      })
}
