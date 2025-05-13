const Mock = require("mockjs")

const Random = Mock.Random

function getQuestionList(len = 10, isDeleted = false, isStar = false) {
  const list = []
  for(let i=0; i<len; i++) {
    list.push(
      { id: Random.id(), title: Random.ctitle(), isPublished: Random.boolean, isStar, answerCount: Random.natural(50, 100), creatAt: Random.datetime(), isDeleted },
    )
  }
  return list
}

module.exports = getQuestionList