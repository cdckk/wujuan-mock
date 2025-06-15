const answer = require('./answer')
const question = require('./question')
const stat = require('./stat')

const mockList = [
  ...question,
  ...answer,
  ...stat
]

module.exports = mockList