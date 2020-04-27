import Sequelize from 'sequelize'

export default async () => {
  const sequelize = new Sequelize('teacHelp', 'postgres', '3674B?3674b', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
  })

  await sequelize.authenticate()
  return sequelize
}
