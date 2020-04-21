import { Classroom } from '../../sequelize'

export default function (app) {
  app.route('/example1')
    .get((req, res) => {
      Classroom.findAll().then(data => res.json(data))
    })
    .post((req, res) => {
      res.send('Post in example 1')
    })
}
