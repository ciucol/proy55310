const express = require('express')
const { port } = require('./configs/server.config')

const app = express()

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
