const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  console.log(req, 'req')
  next('222')
  res.send('22')
})

const server = app.listen(3001, '0.0.0.0', () => {
  const ip = server.address().address
  const port = server.address().port
  const family = server.address().family
  console.log(`地址为${ip}:${port}, 协议为${family}`)
})
