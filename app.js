const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path');
const router = require('./router/index')
const colors = require('colors')

const app = express()

app.engine('.html', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html');

app.use(express.static(__dirname))
app.use(express.static('assets'))
app.use(morgan('short'))
app.use(express.json())
app.use(cors())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => {

  res.render('index.html', {
    list: 222
  })

})

app.use('/api', router)


app.use((req, res, next) => {
  res.status(404).send('404')
})

const server = app.listen(process.env.port || 3001, '0.0.0.0', () => {
  const port = server.address().port

  console.log(`localhost:${port}`.rainbow)
})
