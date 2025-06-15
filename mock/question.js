const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')
const getComponentList = require('./data/getComponentList')

const Random = Mock.Random
module.exports = [
  {
    url: '/api/question/:id', // 获取单个问卷
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: '问卷描述',
          js: '',
          css: '',
          isDeleted: false,
          isPublished: true,
          componentList: getComponentList()
        }
      }
    }
  },
  {
      url: '/api/question',
      method: 'post',
      response() {
        return {
          errno: 0,
          data: {
            id: Random.id()
          }
        }
      }
  },
  {
    url: '/api/question',
    method: 'get',
    response(ctx) {
      const { url = '' } = ctx
      const isDeleted = url.indexOf('isDeleted=true') >= 0
      const isStar = url.indexOf('isStar=true') >= 0
      return {
        errno: 0,
        data: {
          list: getQuestionList(10, isDeleted, isStar),
          total: 100
        }
      }
    }
  },
  {
    url: '/api/question/:id', // 获取单个问卷
    method: 'patch',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        }
      }
    }
  },
  // 复制问卷
  {
    url: '/api/question/duplicate/:id',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  {
    url: '/api/question',
    method: 'delete',
    response() {
      return {
        errno: 0
      }
    }
  }
]