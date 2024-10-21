const express = require('express')
const filledFormController = require("../controller/filledFormController");

const router = express.Router()




router.get('/user/:userId', filledFormController.getFilledFormsByUserId)

router.post('/', filledFormController.createFilledForm)

router.delete('/:id', filledFormController.deleteFilledForm)


module.exports = router