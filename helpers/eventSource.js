const EventSource = require('eventsource')

const CONNECTION_STATUS = {
  0: 'Connecting',
  1: 'Open',
  2: 'Closed'
}

const connectionStatus = (eventSource) => {
  return `Connection: ${CONNECTION_STATUS[eventSource.readyState]} ${eventSource.url}`
}

const fetch = (url, eventName, callback) => {
  const eventSource = new EventSource(url)

  console.log(connectionStatus(eventSource))

  eventSource.onopen = () => {
    console.log(connectionStatus(eventSource))
  }

  eventSource.addEventListener(eventName, event => {
    callback(JSON.parse(event.data))
  })

  eventSource.onerror = () => {
    console.log(connectionStatus(eventSource))
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

const write = (res, data) => {
  const json = JSON.stringify(data)
  res.write("data: " + json + '\n\n');
}

module.exports = {
  connectionStatus,
  fetch,
  setHeaders,
  write
}
