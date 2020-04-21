export default function (app) {
  app.route('/example1')
    .get((req, res) => {
      res.send('Get in example 1')
    })
    .post((req, res) => {
      res.send('Post in example 1')
    })
}
