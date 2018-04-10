const Student = require('../../models/student')

describe('Student', () => {
    test('exists', () => {
        expect(Student).toBeTruthy()
    })
    test('has all method', () => {
        expect(Student.all).toBeTruthy()
    })
    test('handles student', () => {
        const callback = jest.fn()
        const student = {
            studentId: 'qwerty'
        }
        const students = new Set()

        Student.handleStudent(student, students, callback)

        expect(callback).toHaveBeenCalledTimes(1)
    })
    test('has find method', () => {
        expect(Student.find).toBeTruthy()
    })
})
