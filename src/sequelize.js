import Sequelize from 'sequelize'
import ClassroomModel from './models/classroom'
import StudentModel from './models/student'

const sequelize = new Sequelize('teacHelp', 'postgres', '3674B?3674b', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Classroom = ClassroomModel(sequelize, Sequelize)
const Student = StudentModel(sequelize, Sequelize)

Student.belongsTo(Classroom)

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!')
  })
  .catch(err => {
    console.error(err)
  })

module.exports = {
  Classroom,
  Student
}
