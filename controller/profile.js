exports.serchUserInfo = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}
// 关注
exports.followUser = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}
exports.UnFollowUser = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}
