const express = require('express')
const { port } = require('./configs/server.config')
const routing = require('./routing')

const app = express()

routing(app)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
