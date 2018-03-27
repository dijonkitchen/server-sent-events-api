const Score = require('./score')
const es = require('../helpers/eventSource')

exports.all = (callback) => {
    const exams = new Set()

    es.fetch('http://live-test-scores.herokuapp.com/scores', 'score', event => {
        const score = JSON.parse(event.data)
        if (!exams.has(score.exam)) {
            exams.add(score.exam)
            callback(score.exam)
        }
    })
}

exports.find = (examId, callback) => {
    Score.fetch('http://live-test-scores.herokuapp.com/scores', 2, scores => {
        const exams = scores.filter(score => score.exam === examId)
        const average = exams.reduce( (acc, exam) => acc + exam.score, 0) / exams.length
        callback({
            average,
            exams
        })
    })

}
