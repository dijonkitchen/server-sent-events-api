const es = require('../helpers/eventSource')

exports.index = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  es.fetch('http://live-test-scores.herokuapp.com/scores', 'score', event => {
    res.write("data: " + event.data + '\n\n');
  })
}
