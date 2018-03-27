const EventSource = require('eventsource')
const es = require('../helpers/eventSource')

exports.fetch = (url, event, callback) => {
  const eventSource = new EventSource(url)

  es.logConnectionStatus(eventSource)

  eventSource.onopen = () => {
    es.logConnectionStatus(eventSource)
  }

  eventSource.addEventListener(event, callback)

  eventSource.onerror = () => {
    es.logConnectionStatus(eventSource)
    console.log('EventSource failed.')
  }

}
