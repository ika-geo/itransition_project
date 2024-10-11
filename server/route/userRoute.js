const express = require('express')
const userController = require("../controller/userController");

const router = express.Router()


router.get('/', userController.getAllUsers)


router.put('/removeAdmin/:id', userController.removeUserAdmin)
router.put('/setAdmin/:id', userController.setUserAdmin)
router.put('/blockUser/:id', userController.blockUser)
router.put('/unblockUser/:id', userController.unblockUser)

router.delete('/deleteUser/:id', userController.deleteUser)


module.exports = router