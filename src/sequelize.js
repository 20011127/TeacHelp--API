import Sequelize from 'sequelize'
import ClassroomModel from './models/classroom'
import StudentModel from './models/student'

let sequelize
let Classroom
let Student

const initSequilize = async () => {
  console.log('initSequilize in')
  try {
    await sequelize.authenticate()
    console.log('initSequilize out')
    return
  } catch (err) {
    console.log('create sequelize')
    sequelize = new Sequelize('teacHelp', 'postgres', '3674B?3674b', {
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
    try {
      await sequelizeModelsInit()
      await initSequilize()
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}

const sequelizeModelsInit = async () => {
  Classroom = ClassroomModel(sequelize, Sequelize)
  Student = StudentModel(sequelize, Sequelize)

  Student.belongsTo(Classroom)

  try {
    await sequelize.sync()
    console.log('Database & tables created!')
    return
  } catch (err) {
    console.error(err)
    throw err
  }
}

module.exports = {
  initSequilize,
  Classroom,
  Student
}
