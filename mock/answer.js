module.exports = [
  // 搜集（新建）答卷
  {
    url: '/api/answer',
    method: 'post',
    response() {
      return {
        errno: 0
      }
    }
  }
]