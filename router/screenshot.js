const express = require('express')
const router = express.Router()
const screenshot = require('../controller/screenshot')


router.get('/', screenshot.screenshot)
router.get('/getDataList', screenshot.getDataList)

module.exports = router
