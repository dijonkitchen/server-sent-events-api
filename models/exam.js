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
    const scores = new Set()

    es.fetch('http://live-test-scores.herokuapp.com/scores', 'score', event => {
        const score = JSON.parse(event.data)

        if (score.exam === examId) {
            scores.add(score)
            const average = Array.from(scores).reduce( (acc, score) => acc + score.score, 0) / scores.size

            callback({ score, average })
        }
    })

}
