const mongoose = require('mongoose')
const { dburl } = require('../config/config.default')

// mongoose.connect('mongodb://localhost:27017/realworld')

var db = mongoose.connection
// 链接失败的时候
db.on('error', console.error.bind(console, 'connection error:'))
// 链接成功的时候
db.once('open', function () {
  console.log('mongoDB---------链接成功')
})
