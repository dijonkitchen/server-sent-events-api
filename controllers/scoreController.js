const Score = require('../models/score')
const EventSource = require('eventsource')

exports.index = (req, res) => {
  Score.fetch(2, scores => {
    res.json(scores)
  })
}
