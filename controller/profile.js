exports.serchUserInfo = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (err) {
    next(err)
  }
}
// 关注
exports.followUser = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (err) {
    next(err)
  }
}
exports.UnFollowUser = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (err) {
    next(err)
  }
}
