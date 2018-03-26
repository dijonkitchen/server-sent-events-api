const Score = require('../models/score')
const EventSource = require('eventsource')

exports.index = (req, res) => {
  Score.fetch('http://live-test-scores.herokuapp.com/scores', 2, scores => {
    res.json(scores)
  })
}
