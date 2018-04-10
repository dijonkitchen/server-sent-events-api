const es = require('../helpers/eventSource')

const ENDPOINT = 'http://live-test-scores.herokuapp.com/scores'
const EVENT = 'score'

const all = (callback) => {
    const students = new Set()

    es.fetch(ENDPOINT, EVENT, student => {
        handleStudent(student, students, callback)
    })
}

const handleStudent = (student, students, callback) => {
    if (!students.has(student.studentId)) {
        students.add(student.studentId)
        callback(student)
    }
}

const find = (studentId, callback) => {
    const scores = new Set()

    es.fetch(ENDPOINT, EVENT, score => {
        handleScore(studentId, score, scores, callback)
    })
}

const handleScore = (studentId, score, scores, callback) => {
    if (score.studentId === studentId) {
        scores.add(score)
        const totalScore = Array.from(scores).reduce( (acc, score) => acc + score.score, 0)
        const average = totalScore / scores.size

        callback({ score, average })
    }
}

module.exports = {
    all,
    handleStudent,
    find,
    handleScore
}
