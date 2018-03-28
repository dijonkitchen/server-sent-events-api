const es = require('../../helpers/eventSource')

describe('EventSource helper', () => {
    test('exists', () => {
        expect(es).toBeTruthy()
    })

    describe('logConnectionStatus', () => {
        test('logs connecting status', () => {
            const subject = es.logConnectionStatus({
                readyState: 0,
                url: 'testUrl'
            })
            expect(subject).toBe('Connection: Connecting testUrl')
        })

        test('logs open status', () => {
            const subject = es.logConnectionStatus({
                readyState: 1,
                url: 'testUrl'
            })
            expect(subject).toBe('Connection: Open testUrl')
        })

        test('logs closed status', () => {
            const subject = es.logConnectionStatus({
                readyState: 2,
                url: 'testUrl'
            })
            expect(subject).toBe('Connection: Closed testUrl')
        })
    })
})
