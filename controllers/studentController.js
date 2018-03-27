const Student = require('../models/student')
const es = require('../helpers/eventSource')

exports.index = (req, res) => {
    es.setHeaders(res)

    Student.all(student => {
        const json = JSON.stringify(student.studentId)
        res.write("data: " + json + '\n\n');
    })
}

exports.show = (req, res) => {
    es.setHeaders(res)

    Student.find(req.params.id, student => {
        const json = JSON.stringify(student)
        res.write("data: " + json + '\n\n');
    })
}
