export default (sequelize, type) => {
  return sequelize.define('student', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: type.STRING,
    lastName: type.STRING
  })
}
