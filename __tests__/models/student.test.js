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
      { studentId: 'qwerty' }
    ]
    const students = new Set()

    for (const student of studentData) {
      Student.handleStudent(student, students, callback)
    }

    expect(callback).toHaveBeenCalledTimes(2)
  })
  test('handles unique student data', () => {
    const subject = []
    const callback = (student) => {
      subject.push(student.studentId)
    }
    const studentData = [
      { studentId: 'qwerty' },
      { studentId: 'jonathan' },
      { studentId: 'qwerty' }
    ]
    const students = new Set()

    for (const student of studentData) {
      Student.handleStudent(student, students, callback)
    }

    expect(subject).toEqual(['qwerty', 'jonathan'])
  })
  test('has find method', () => {
    expect(Student.find).toBeTruthy()
  })
  test('handles score', () => {
    const callback = jest.fn()
    const scoreData = [
      { studentId: 'qwerty' },
      { studentId: 'jonathan' },
      { studentId: 'qwerty' }
    ]
    const scores = new Set()

    for (const score of scoreData) {
      Student.handleScore('qwerty', score, scores, callback)
    }

    expect(callback).toHaveBeenCalledTimes(2)
  })
  test('handles score data', () => {
    const subject = []
    const callback = (score) => {
      subject.push(score)
    }
    const scoreData = [
      { studentId: 'qwerty', score: 80 },
      { studentId: 'jonathan', score: 39 },
      { studentId: 'qwerty', score: 100 }
    ]
    const scores = new Set()

    for (const score of scoreData) {
      Student.handleScore('qwerty', score, scores, callback)
    }

    expect(subject).toEqual([
      {
        score: {
          studentId: 'qwerty',
          score: 80
        },
        average: 80
      },
      {
        score: {
          studentId: 'qwerty',
          score: 100
        },
        average: 90
      }
    ])
  })
})
