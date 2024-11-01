const express = require('express')

const authController = require("../controller/authController");

const router = express.Router()

router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/getMe', authController.getMe)
router.post('/salesForce', authController.salesforce)

module.exports = router