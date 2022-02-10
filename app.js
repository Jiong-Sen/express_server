const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const router = require('./router/index')
const errHandle = require('./middleware/err-handle')
require('./modal/index')

app.use(morgan('short'))
app.use(express.json())
app.use(cors())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use('/api', router)

app.use(errHandle())

const server = app.listen(process.env.port || 3001, '0.0.0.0', () => {
  const port = server.address().port
  console.log(`localhost:${port}`)
})
