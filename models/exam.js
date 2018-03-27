const Score = require('./score')

exports.all = (callback) => {
    Score.fetch('http://live-test-scores.herokuapp.com/scores', 2, scores => {
        const exams = scores.map(score => score.exam)
        const examsSet = new Set(exams)
        callback(Array.from(examsSet))
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
