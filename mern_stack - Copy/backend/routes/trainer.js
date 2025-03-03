const express = require('express')
const router = express.Router()


//controller functions

const {signupTrainer, loginTrainer, getnames} = require('../controllers/trainerController')

//login route
router.post('/login', loginTrainer)


//signup route

router.post('/signup', signupTrainer)

//send-names

router.get('/get-names', getnames)


module.exports = router