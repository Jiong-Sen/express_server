module.login = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}
module.register = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}

module.getUserInfo = (req, res, next) => {
  try {
    res.send('get user')
  } catch (error) {
    next(err)
  }
}

module.putUserInfo = (req, res, next) => {
  try {
    res.send('put user')
  } catch (error) {
    next(err)
  }
}
