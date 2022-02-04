const express = require('express')
const router = express.Router()

router.use(require('./user'))
router.use('/profiles', require('./profile'))

router.use('/snipate', require('./snipate'))

module.exports = router
