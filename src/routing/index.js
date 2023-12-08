const usersController = require('../controllers/users.controller')

const routing = appExpress => {
  appExpress.use('/users', usersController)
}

module.exports = routing
