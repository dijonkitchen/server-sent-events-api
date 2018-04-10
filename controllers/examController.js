const Exam = require('../models/exam')
const es = require('../helpers/eventSource')

exports.index = (req, res) => {
  es.setHeaders(res)

  Exam.all((exam) => {
    es.write(res, exam)
  })
}

exports.show = (req, res) => {
  es.setHeaders(res)

  const id = JSON.parse(req.params.id)
  Exam.find(id, (exam) => {
    es.write(res, exam)
  })
}
