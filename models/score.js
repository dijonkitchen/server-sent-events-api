const EventSource = require('eventsource')
const es = require('../helpers/eventSource')

const BATCH_SIZE = 20

exports.fetch = (url, batches = 1, cb) => {
  const eventSource = new EventSource(url)

  es.logConnectionStatus(eventSource)

  eventSource.onopen = () => {
    es.logConnectionStatus(eventSource)
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
    es.logConnectionStatus(eventSource)
    console.log('EventSource failed.')
  }

}
