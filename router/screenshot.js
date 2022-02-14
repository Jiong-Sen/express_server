const express = require('express')
const router = express.Router()
const screenshot = require('../controller/screenshot')


router.get('/', screenshot.screenshot)

module.exports = router
