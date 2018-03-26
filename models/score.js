const EventSource = require('eventsource')

const BATCH_SIZE = 20
const CONNECTION_STATUS = {
  0: 'Connecting',
  1: 'Open',
  2: 'Closed'
}

exports.fetch = (url, batches = 1, cb) => {
  const eventSource = new EventSource(url)

  console.log('Connection: ', CONNECTION_STATUS[eventSource.readyState], eventSource.url)

  eventSource.onopen = () => {
    console.log('Connection: ', CONNECTION_STATUS[eventSource.readyState], eventSource.url)
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
    console.log('Connection: ', CONNECTION_STATUS[eventSource.readyState], eventSource.url)
    console.log('EventSource failed.')
  }

}
