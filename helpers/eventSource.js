const EventSource = require('eventsource')

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

const setHeaders = (res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
}

module.exports = {
  logConnectionStatus,
  fetch,
  setHeaders
}
