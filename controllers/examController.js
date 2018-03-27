const Exam = require('../models/exam')

exports.index = (req, res) => {
    Exam.all(exams => {
        res.json(exams)
    })
}
