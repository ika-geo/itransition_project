const express = require('express')
const formController = require("../controller/formController");

const router = express.Router()


router.get('/', formController.getAllForm)
router.get('/user/:userId', formController.getFormByUserId)
router.get('/:id', formController.getFormById)

router.post('/', formController.createForm)


router.put('/:id', formController.updateForm)

router.delete('/formField/:id', formController.deleteFormField)
router.delete('/:id', formController.deleteForm)


module.exports = router