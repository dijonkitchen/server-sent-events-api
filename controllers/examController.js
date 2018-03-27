const Exam = require('../models/exam')

exports.index = (req, res) => {
    Exam.all(exams => {
        res.json(exams)
    })
}

exports.show = (req, res) => {
    const id = JSON.parse(req.params.id)
    Exam.find(id, exam => {
        res.json(exam)
    })
}
