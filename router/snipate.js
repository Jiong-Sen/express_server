const express = require('express')
const router = express.Router()
const screenshot = require('../controller/screenshot')

// 查询用户关注列表
router.get('/', screenshot.screenshot)

module.exports = router
