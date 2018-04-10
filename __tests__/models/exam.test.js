const Exam = require('../../models/exam')

describe('Exam', () => {
    test('can get all exams', () => {
        expect(Exam.all).toBeTruthy()
    })
    test('handles exams', () => {
        expect(Exam.handleScore).toBeTruthy()
    })
    test('handles unique exam data', () => {
        const subject = []
        const callback = exam => subject.push(exam)
        const scoreData = [
            { exam: 123 },
            { exam: 43 },
            { exam: 123 }
        ]
        const exams = new Set()

        for (const score of scoreData) {
            Exam.handleScore(score, exams, callback)
        }

        expect(subject).toEqual([123, 43])
    })
    test('can find scores for an exam', () => {
        expect(Exam.find).toBeTruthy()
    })
    test('handles scores for an exam', () => {
        expect(Exam.handleExamScores).toBeTruthy()
    })
})
