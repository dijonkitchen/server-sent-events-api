const es = require('../helpers/eventSource')

const ENDPOINT = 'http://live-test-scores.herokuapp.com/scores'
const EVENT = 'score'

exports.all = (callback) => {
    const exams = new Set()

    es.fetch(ENDPOINT, EVENT, score => {
        if (!exams.has(score.exam)) {
            exams.add(score.exam)
            callback(score.exam)
        }
    })
}

exports.find = (examId, callback) => {
    const scores = new Set()

    es.fetch(ENDPOINT, EVENT, score => {
        if (score.exam === examId) {
            scores.add(score)
            const average = Array.from(scores).reduce( (acc, score) => acc + score.score, 0) / scores.size

            callback({ score, average })
        }
    })

}
