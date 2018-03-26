const EventSource = require('eventsource')

exports.fetch = (batches = 1, cb) => {
  const BATCH_SIZE = 20
  const eventSource = new EventSource('http://live-test-scores.herokuapp.com/scores')

  const connectionStatus = {
    0: 'Connecting',
    1: 'Open',
    2: 'Closed'
  }

  console.log('Connection: ', connectionStatus[eventSource.readyState], eventSource.url)

  eventSource.onopen = () => {
    console.log('Connection: ', connectionStatus[eventSource.readyState], eventSource.url)
  }

  const scores = new Set()

  const handleScores = (event) => {
    const data = JSON.parse(event.data)
    scores.add(data)
    if (scores.size >= (batches * BATCH_SIZE)) {
      eventSource.close()
      cb(Array.from(scores))
    }
  }

  eventSource.addEventListener('score', handleScores)

  eventSource.onerror = () => {
    console.log('Connection: ', connectionStatus[eventSource.readyState], eventSource.url)
    console.log('EventSource failed.')
  }

}
