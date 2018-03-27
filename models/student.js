const es = require('../helpers/eventSource')

exports.all = (callback) => {
    const students = new Set()

    es.fetch('http://live-test-scores.herokuapp.com/scores', 'score', event => {
        const student = JSON.parse(event.data)
        if (!students.has(student.studentId)) {
            students.add(student.studentId)
            callback(student)
        }
    })
}

exports.find = (studentId, callback) => {
    es.fetch('http://live-test-scores.herokuapp.com/scores', 'score', event => {
        const student = JSON.parse(event.data)
        if (student.studentId === studentId) {
            callback(student)
        }
    })

}
