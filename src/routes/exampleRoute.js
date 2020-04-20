export default function (app) {
  const controller = require('../controller/exampleController')

  app.route('/example1')
    .get(controller.getExample)
    .post(controller.postExample)
}
