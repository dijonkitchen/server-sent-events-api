const es = require('../helpers/eventSource')

const ENDPOINT = 'http://live-test-scores.herokuapp.com/scores'
const EVENT = 'score'

const all = (callback) => {
    const exams = new Set()

    es.fetch(ENDPOINT, EVENT, score => {
        if (!exams.has(score.exam)) {
            exams.add(score.exam)
            callback(score.exam)
        }
    })
}

const find = (examId, callback) => {
    const scores = new Set()

    es.fetch(ENDPOINT, EVENT, score => {
        if (score.exam === examId) {
            scores.add(score)
            const average = Array.from(scores).reduce( (acc, score) => acc + score.score, 0) / scores.size

            callback({ score, average })
        }
    })

}

module.exports = {
    all,
    find
}
