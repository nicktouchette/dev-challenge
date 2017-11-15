const express = require('express')
const router = express.Router()
const config = require('./config')

const { Client } = require('pg')
const client = new Client({
  user: config.USER,
  host: config.HOST,
  database: config.DATABASE,
  password: config.PASSWORD,
  port: config.PORT,
})
client.connect()

router.get('/', (request, response) => {
  client.query('SELECT * FROM title', (err, res) => {
    console.log(err, res)
    client.end()
    response.json(res.rows)
  })
})

// router.post('/', (request, response))

module.exports = router
