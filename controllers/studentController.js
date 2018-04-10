const Student = require('../models/student')
const es = require('../helpers/eventSource')

exports.index = (req, res) => {
  es.setHeaders(res)

  Student.all((student) => {
    es.write(res, student.studentId)
  })
}

exports.show = (req, res) => {
  es.setHeaders(res)

  Student.find(req.params.id, (student) => {
    es.write(res, student)
  })
}
