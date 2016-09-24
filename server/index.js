'use strict'

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
// Uncomment for MongoDB connection
// const mongoose = require('mongoose')

/**
 * Configure database
 */
// mongoose.connect('mongodb://localhost:27017/react-webpack')
// mongoose.connection.on('error', () => {
//   console.log('MongoDB Connection Error. Please make sure that MongoDB is running.')
//   process.exit(1)
// })

/**
 * Configure server
 */
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(methodOverride())

app.use('/', express.static(path.join(__dirname, '../build')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

app.use('/test', (req, res) => {
  res.status(200).send({
    message: 'Test succesful'
  })
})


app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}`)
})
