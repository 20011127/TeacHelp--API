export default function (app) {
  app.route('/example2')
    .get((req, res) => {
      res.send('Get in example 2')
    })
    .post((req, res) => {
      res.send('Post in example 2')
    })
}
