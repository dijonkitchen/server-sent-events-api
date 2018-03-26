const EventSource = require('eventsource')
const es = require('../helpers/eventSource')

const BATCH_SIZE = 20

exports.fetch = (url, batches = 1, cb) => {
  const eventSource = new EventSource(url)

  es.logConnectionStatus(eventSource)

  eventSource.onopen = () => {
    es.logConnectionStatus(eventSource)
  }

  const handleData = (set, event) => {
    const data = JSON.parse(event.data)
    set.add(data)
    if (set.size >= (batches * BATCH_SIZE)) {
      eventSource.close()
      cb(Array.from(set))
    }
  }

  const scores = new Set()

  eventSource.addEventListener('score', event => handleData(scores, event))

  eventSource.onerror = () => {
    es.logConnectionStatus(eventSource)
    console.log('EventSource failed.')
  }

}
