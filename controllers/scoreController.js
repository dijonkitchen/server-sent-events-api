const Score = require('../models/score')

exports.index = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  Score.fetch('http://live-test-scores.herokuapp.com/scores', 'score', scores => {
    res.write("data: " + scores.data + '\n\n');
  })
}
