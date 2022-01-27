const express = require('express')
const router = express.Router()

// 获取w文章列表
router.get('/', (req, res, next) => {
  try {
    res.send('get  /')
  } catch (error) {
    next(err)
  }
})

//
router.get('/feed', (req, res, next) => {
  try {
    res.send('post :username')
  } catch (error) {
    next(err)
  }
})
// 取消关注
router.get('/:slug', (req, res, next) => {
  try {
    res.send('get user')
  } catch (error) {
    next(err)
  }
})
router.post('/', (req, res, next) => {
  try {
    res.send('get user')
  } catch (error) {
    next(err)
  }
})
module.exports = router
