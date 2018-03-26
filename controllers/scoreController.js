const Score = require('../models/score')
const EventSource = require('eventsource')

exports.index = (req, res) => {
  Score.fetch(scores => {
    res.json(scores)
  })
}
