export default function async (sequelize) {
  const models = {}
  const modelsNames = [
    'classroom',
    'student'
  ]
  modelsNames.map(modelName => {
    const model = require('../models/'.concat(modelName)).default(sequelize)

    models[model.name] = model

    console.log(`The model: ${modelName} has been initiate`)
  })

  Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  })

  return models
}
