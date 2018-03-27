const Score = require('./score')

exports.all = (callback) => {
    Score.fetch('http://live-test-scores.herokuapp.com/scores', 2, scores => {
        const students = scores.map(score => score.studentId)
        callback(students)
    })
}

exports.find = (studentId, callback) => {
    Score.fetch('http://live-test-scores.herokuapp.com/scores', 2, scores => {
        const student = scores.filter(score => score.studentId === studentId)
        callback(student)
    })

}
