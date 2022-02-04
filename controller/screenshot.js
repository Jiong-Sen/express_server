const puppeteer = require('puppeteer')

exports.screenshot = async (req, res, next) => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(req.query.url)
    console.log(req.query.url, 'req.query.url')
    const baseData = await page.screenshot({
      type: 'png',
      encoding: 'base64'
    })
    await browser.close()
    res.send({
      code: 200,
      data: `data:image/png;base64,${baseData}`
    })
  } catch (err) {
    next(err)
  }
}
