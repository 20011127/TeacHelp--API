const saveClassroomValidator = function (req, res, next) {
  const errorList = []
  const props = [
    'name'
  ]

  props.map(prop => {
    if (!(prop in req.body)) {
      errorList.push(prop)
    }
  })

  if (errorList.length > 0) {
    res.send(400, {
      status: 400,
      result: `Missing attributes ${errorList.join(';')} for saving classroom`
    })
  } else {
    next()
  }
}

export default {
  saveClassroomValidator
}
