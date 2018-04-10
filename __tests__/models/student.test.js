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
    test('handles only unique students', () => {
        const callback = jest.fn()
        const student = {
            studentId: 'qwerty'
        }
        const students = new Set()

        Student.handleStudent(student, students, callback)
        Student.handleStudent(student, students, callback)

        expect(callback).toHaveBeenCalledTimes(1)
    })
    test('handles only unique students', () => {
        const callback = jest.fn()
        const studentData = [
            { studentId: 'qwerty' },
            { studentId: 'jonathan' },
            { studentId: 'qwerty' },
        ]
        const students = new Set()

        for (const student of studentData) {
            Student.handleStudent(student, students, callback)
        }

        expect(callback).toHaveBeenCalledTimes(2)
    })
    test('has find method', () => {
        expect(Student.find).toBeTruthy()
    })
})
