const puppeteer = require('puppeteer')

exports.screenshot = (req, res, next) => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://baidu.com')
    await page.screenshot({ path: 'example.png' })

    await browser.close()

    res.send('screenshot web image')
  } catch (error) {
    next(err)
  }
}
