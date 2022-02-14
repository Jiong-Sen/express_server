const express = require('express')
const router = express.Router()


router.use('/screenshot', require('./screenshot'))

module.exports = router
