export default (sequelize, type) => {
  return sequelize.define('classroom', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING
  })
}
