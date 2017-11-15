const express = require('express')

const app = express()
const router = require("./config/routes");

app.use('/', router)

// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
