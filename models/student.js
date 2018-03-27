const es = require('../helpers/eventSource')

exports.all = (callback) => {
    const students = new Set()

    es.fetch('http://live-test-scores.herokuapp.com/scores', 'score', student => {
        if (!students.has(student.studentId)) {
            students.add(student.studentId)
            callback(student)
        }
    })
}

exports.find = (studentId, callback) => {
    const scores = new Set()

    es.fetch('http://live-test-scores.herokuapp.com/scores', 'score', score => {
        if (score.studentId === studentId) {
            scores.add(score)
            const totalScore = Array.from(scores).reduce( (acc, score) => acc + score.score, 0)
            const average = totalScore / scores.size

            callback({ score, average })
        }
    })

}
