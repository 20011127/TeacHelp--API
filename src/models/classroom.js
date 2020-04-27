import Sequelize from 'sequelize'

export default (sequelize) => {
  return sequelize.define('classroom', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING
  })
}
