const express = require('express')
const router = express.Router()
const user = require('../controller/user')

// 用户登陆
router.post('/users/login', user.login)
// 用户注册
router.post('/users', user.register)
// 获取用户信息
router.get('/user', user.getUserInfo)
// 更新当前用户
router.put('/user', user.putUserInfo)

module.exports = router
