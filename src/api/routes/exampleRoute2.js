import { Student } from '../../sequelize'

export default function (app) {
  app.route('/example2')
    .get((req, res) => {
      Student.findAll().then(data => res.json(data))
    })
    .post((req, res) => {
      res.send('Post in example 2')
    })
}
