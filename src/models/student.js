import Sequelize from 'sequelize'

export default (sequelize) => {
  return sequelize.define('student', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
  })
}
