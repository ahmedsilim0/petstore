const express = require('express')
const router =  express.Router()
const {checkIfUserExistOrNot} = require('../middleware/checkUser')
const bidsController = require('../controllers/bids.controllers')
const {addBidsValidator} = require('../validators/bids.validation')


router.post('/bids/add' ,[addBidsValidator , checkIfUserExistOrNot] ,bidsController.pickPets)
router.get('/bids/get' ,bidsController.getBidsController)
module.exports = router