const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const fs = require('fs')

// database function
const connectDB = require('./config/db')

// initialize app
const app = express()

// route imports
const sectorRoutes = require('./routes/sectorRoutes')

// load config
dotenv.config()

// connect to database
connectDB()

// log only 4xx and 5xx responses to console
app.use(
  morgan('dev', {
    skip: function (req, res) {
      return res.statusCode < 400
    }
  })
)

// log all requests to access.log
app.use(
  morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a'
    })
  })
)

// InitMiddleware
app.use(express.json())
app.use(cors())

const port = process.env.PORT

// routes
app.use('/api/sector', sectorRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
