const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const router = require('./router/index')
app.use(express.static('assets'))
app.use(morgan('short'))
app.use(express.json())
app.use(cors())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use('/api', router)

app.use((req, res, next) => {
  res.status(404).send('404')
})

const server = app.listen(process.env.port || 3001, '0.0.0.0', () => {
  const port = server.address().port

  console.log(`localhost:${port}`)
})
