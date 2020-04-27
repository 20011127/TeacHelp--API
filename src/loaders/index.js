import sequelizeLoader from './sequelize'
import expressLoader from './express'
import modelsLoader from './models'

export default async (app) => {
  const sequelize = await sequelizeLoader()
  console.log('✌️ Sequelize loaded')

  const models = await modelsLoader(sequelize)

  await expressLoader(app, models)
  console.log('✌️ Express loaded')
}
