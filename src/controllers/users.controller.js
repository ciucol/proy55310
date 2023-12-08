const { Router } = require('router')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'users' })
})

module.exports = router
