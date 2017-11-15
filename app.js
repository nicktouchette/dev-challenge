const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Include router
const router = require('./config/router')

// Set up middleware
app.use(express.static('./client/build'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)

// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
