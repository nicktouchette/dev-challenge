const express = require('express')
const router = express.Router()
const MoviesRoutes = require('../routes/movies/route')

MoviesRoutes.init(router)

router.get('*', (req, res) => {
  res.status(404).end()
})

module.exports = router
