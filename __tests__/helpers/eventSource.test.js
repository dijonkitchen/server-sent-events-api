const es = require('../../helpers/eventSource')

describe('EventSource helper', () => {
    test('exists', () => {
        expect(es).toBeTruthy()
    })

    test('logs connection status', () => {
        const subject = es.logConnectionStatus({
            readyState: 0,
            url: 'testUrl'
        })
        expect(subject).toBe('Connection: Connecting testUrl')
    })
})
