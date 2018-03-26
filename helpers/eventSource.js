const BATCH_SIZE = 20
const CONNECTION_STATUS = {
  0: 'Connecting',
  1: 'Open',
  2: 'Closed'
}

exports.logConnectionStatus = (eventSource) => {
  console.log('Connection: ', CONNECTION_STATUS[eventSource.readyState], eventSource.url)
}
