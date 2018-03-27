const Student = require('../models/student')
const es = require('../helpers/eventSource')

exports.index = (req, res) => {
    es.setHeaders(res)

    Student.all(student => {
        res.write("data: " + student.studentId + '\n\n');
    })
}

exports.show = (req, res) => {
    es.setHeaders(res)

    Student.find(req.params.id, student => {
        res.write("data: " + student + '\n\n');
    })
}
