const express = require('express')
const userController = require("../controller/userController");

const router = express.Router()


router.get('/', userController.getAllUsers)

router.put('/removeAdmin/:id', userController.removeUserAdmin)
router.put('/setAdmin/:id', userController.setUserAdmin)


module.exports = router