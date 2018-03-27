const Exam = require('../models/exam')
const es = require('../helpers/eventSource')

exports.index = (req, res) => {
    es.setHeaders(res)

    Exam.all(exam => {
        const json = JSON.stringify(exam)
        res.write("data: " + json + '\n\n');
    })
}

exports.show = (req, res) => {
    es.setHeaders(res)

    const id = JSON.parse(req.params.id)
    Exam.find(id, exam => {
        const json = JSON.stringify(exam)
        res.write("data: " + json + '\n\n');
    })
}
