const es = require('../helpers/eventSource')

exports.all = (callback) => {
    es.fetch('http://live-test-scores.herokuapp.com/scores', 'score', callback)
}

exports.find = (studentId, callback) => {
    Score.fetch('http://live-test-scores.herokuapp.com/scores', 2, scores => {
        const student = scores.filter(score => score.studentId === studentId)
        callback(student)
    })

}
