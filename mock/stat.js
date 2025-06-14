const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')

const getStatList = require('./data/getStatList')

const Random = Mock.Random

module.exports = [
  // 答案列表
  {
    url: '/api/stat/:questionId',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          total: 100, // 分页
          list: getStatList()
        }
      }
    }
  }
]