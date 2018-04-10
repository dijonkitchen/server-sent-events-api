const es = require('../../helpers/eventSource')

describe('EventSource helper', () => {
    test('exists', () => {
        expect(es).toBeTruthy()
    })

    describe('connectionStatus', () => {
        test('connecting', () => {
            const subject = es.connectionStatus({
                readyState: 0,
                url: 'testUrl'
            })
            expect(subject).toBe('Connection: Connecting testUrl')
        })

        test('open', () => {
            const subject = es.connectionStatus({
                readyState: 1,
                url: 'testUrl'
            })
            expect(subject).toBe('Connection: Open testUrl')
        })

        test('closed', () => {
            const subject = es.connectionStatus({
                readyState: 2,
                url: 'testUrl'
            })
            expect(subject).toBe('Connection: Closed testUrl')
        })
    })

    describe('handleEvent', () => {
        test('calls callback when event is emitted', () => {
            const data = JSON.stringify({
                studentId: 'asdf'
            })
            const event = { data }

            es.handleEvent(event, student => {
                expect(student.studentId).toEqual('asdf')
            })

        })
    })
})
