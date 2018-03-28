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
})
