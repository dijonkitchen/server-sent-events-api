const Exam = require('../../models/exam')

describe('Exam', () => {
    test('can get all exams', () => {
        expect(Exam.all).toBeTruthy()
    })
    test('handles exams', () => {
        expect(Exam.handleScore).toBeTruthy()
    })
    test('handles exams', () => {
        const callback = jest.fn()
        const score = {
            exam: 123
        }
        const exams = new Set()

        Exam.handleScore(score, exams, callback)

        expect(callback).toHaveBeenCalledTimes(1)
    })
})
