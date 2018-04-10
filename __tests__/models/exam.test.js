const Exam = require('../../models/exam')

describe('Exam', () => {
    test('can get all exams', () => {
        expect(Exam.all).toBeTruthy()
    })
    test('handles exams', () => {
        expect(Exam.handleScore).toBeTruthy()
    })
})
