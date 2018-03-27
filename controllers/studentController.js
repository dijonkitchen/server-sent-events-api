const Student = require('../models/student')

exports.index = (req, res) => {
    Student.all(students => {
        res.json(students)
    })
}
