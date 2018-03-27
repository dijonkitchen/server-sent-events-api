const Student = require('../models/student')

exports.index = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    Student.all(event => {
        const student = JSON.parse(event.data)
        res.write("data: " + student.studentId + '\n\n');
    })
}

exports.show = (req, res) => {
    Student.find(req.params.id, student=> {
        res.json(student)
    })
}
