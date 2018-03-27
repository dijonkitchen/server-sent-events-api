const EventSource = require('eventsource')

const BATCH_SIZE = 20
const CONNECTION_STATUS = {
  0: 'Connecting',
  1: 'Open',
  2: 'Closed'
}

const logConnectionStatus = (eventSource) => {
  console.log('Connection: ', CONNECTION_STATUS[eventSource.readyState], eventSource.url)
}

const fetch = (url, eventName, callback) => {
  const eventSource = new EventSource(url)

  logConnectionStatus(eventSource)

  eventSource.onopen = () => {
    logConnectionStatus(eventSource)
  }

  eventSource.addEventListener(eventName, callback)

  eventSource.onerror = () => {
    logConnectionStatus(eventSource)
    console.log('EventSource failed.')
  }
}

module.exports = {
  logConnectionStatus,
  fetch
}
