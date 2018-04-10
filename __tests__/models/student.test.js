const Student = require('../../models/student')

describe('Student', () => {
    test('exists', () => {
        expect(Student).toBeTruthy()
    })
    test('has all method', () => {
        expect(Student.all).toBeTruthy()
    })
    test('has find method', () => {
        expect(Student.find).toBeTruthy()
    })
})
