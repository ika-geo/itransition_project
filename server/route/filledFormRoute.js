const express = require('express')
const filledFormController = require("../controller/filledFormController");

const router = express.Router()




router.get('/user/:userId', filledFormController.getFilledFormsByUserId)
router.get('/:id', filledFormController.getFilledFormById)


router.post('/', filledFormController.createFilledForm)

router.put('/', filledFormController.editFilledFormItems)

router.delete('/:id', filledFormController.deleteFilledForm)


module.exports = router