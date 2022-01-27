const express = require('express')
const router = express.Router()
const profile = require('../controller/profile')

// 查询用户关注列表
router.get('/:username', profile.serchUserInfo)
// 关注用户
router.post('/:username/follow', profile.followUser)
// 取消关注用户
router.delete('/:username/follow', profile.UnFollowUser)

module.exports = router
