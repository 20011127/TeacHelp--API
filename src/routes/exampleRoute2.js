export default function (app) {
  const controller = require('../controller/exampleController')

  app.route('/example2')
    .get(controller.getExample)
    .post(controller.postExample)
}
