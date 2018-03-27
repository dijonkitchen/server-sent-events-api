const Student = require('../models/student')

exports.index = (req, res) => {
    Student.all(students => {
        res.json(students)
    })
}

exports.show = (req, res) => {
    Student.find(req.params.id, student=> {
        res.json(student)
    })
}
