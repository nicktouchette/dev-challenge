const express = require('express')

const app = express()
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ header: 'index!'});
})

app.use('/', router)

// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
