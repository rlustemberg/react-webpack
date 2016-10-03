'use strict'

const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const prod = process.env.NODE_ENV === 'prod'

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
const port = process.env.PORT || prod? 3001: 3000

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(methodOverride())

app.use('/', express.static(path.join(__dirname, prod? '../public': '../build')));

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

/**
 * Tutorial api
 */
const COMMENTS_FILE = path.join(__dirname, 'data', 'comments.json');
app.get('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    res.json(JSON.parse(data))
  })
})

app.post('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    let comments = JSON.parse(data)
    let newComment = {
      id: req.body.id,
      author: req.body.author,
      text: req.body.text,
    }
    comments.push(newComment)
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), (err) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      res.json(comments)
    })
  })
})

// End

app.listen(port, () => {
  console.log(`Server started: http://localhost:${port}`)
})
