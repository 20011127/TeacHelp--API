import classroomModel from '../models/classroom'

export default async (sequelize) => {
  const classroom = await classroomModel(sequelize)
  return classroom
}
