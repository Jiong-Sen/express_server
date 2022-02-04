const puppeteer = require('puppeteer')

exports.screenshot = async (req, res, next) => {
  try {
    console.log(req.query.url, 'req.params')
    const hosts = req.query.url.split('www.')[1].split('/')[0]

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.baidu.com')
    await page.screenshot({ path: `../screenshot/${hosts}.png` })

    await browser.close()

    res.send('screenshot web success')
  } catch (error) {
    next(err)
  }
}
