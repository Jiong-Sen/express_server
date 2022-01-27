module.serchUserInfo = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}
// 关注
module.followUser = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}
module.UnFollowUser = (req, res, next) => {
  try {
    res.send('post /login')
  } catch (error) {
    next(err)
  }
}
