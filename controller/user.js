const { json } = require('body-parser')

exports.login = (req, res, next) => {
  try {
    JSON.parse('asdasdaf')
    res.send('post /login')
  } catch (err) {
    next(err)
  }
}
exports.register = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (err) {
    next(err)
  }
}

exports.getUserInfo = (req, res, next) => {
  try {
    res.send('get user')
  } catch (err) {
    next(err)
  }
}

exports.putUserInfo = (req, res, next) => {
  try {
    res.send('put user')
  } catch (err) {
    next(err)
  }
}
