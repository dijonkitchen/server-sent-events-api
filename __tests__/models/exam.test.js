const Exam = require('../../models/exam')

describe('Exam', () => {
    test('can get all exams', () => {
        expect(Exam.all).toBeTruthy()
    })
    test('handles exams', () => {
        expect(Exam.handleExams).toBeTruthy()
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
            Exam.handleExams(score, exams, callback)
        }

        expect(subject).toEqual([123, 43])
    })
    test('can find scores for an exam', () => {
        expect(Exam.find).toBeTruthy()
    })
    test('handles scores for an exam', () => {
        expect(Exam.handleExamScores).toBeTruthy()
    })
    test('handles unique scores for an exam', () => {
        const callback = jest.fn()
        const scoreData = [
            { exam: 123, score: 50 },
            { exam: 43, score: 60 },
            { exam: 123, score: 70 }
        ]
        const exams = new Set()

        for (const score of scoreData) {
            Exam.handleExamScores(123, score, exams, callback)
        }

        expect(callback).toHaveBeenCalledTimes(2)
    })
    test('handles unique score data for an exam', () => {
        const subject = []
        const callback = score => subject.push(score)
        const scoreData = [
            { exam: 123, score: 50 },
            { exam: 43, score: 60 },
            { exam: 123, score: 70 }
        ]
        const exams = new Set()

        for (const score of scoreData) {
            Exam.handleExamScores(123, score, exams, callback)
        }

        expect(subject).toEqual([
            {
                score: {
                    exam: 123,
                    score: 50
                },
                average: 50
            },
            {
                score: {
                    exam: 123,
                    score: 70
                },
                average: 60
            },
        ])
    })
})
