'use strict'

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../build')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
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
