const router = app => {
  app.use('*', (req, res) => {
    res.json({ message: 'Hi server' })
  })
}

module.exports = router
