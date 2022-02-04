exports.login = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}
exports.register = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}

exports.getUserInfo = (req, res, next) => {
  try {
    res.send('get user')
  } catch (error) {
    next(err)
  }
}

exports.putUserInfo = (req, res, next) => {
  try {
    res.send('put user')
  } catch (error) {
    next(err)
  }
}
