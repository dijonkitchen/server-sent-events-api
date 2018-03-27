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
    Score.fetch('http://live-test-scores.herokuapp.com/scores', 2, scores => {
        const student = scores.filter(score => score.studentId === studentId)
        callback(student)
    })

}
