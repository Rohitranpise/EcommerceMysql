const express = require('express')
const router = express.Router();

const headphonesController = require("../controllers/headphones.controller");

//get all headphones
router.get('/', headphonesController.getheadphonesList);

//get headphone by id
router.get('/:id', headphonesController.getheadphoneById);

//create new headphone
router.post('/', headphonesController.createNewheadphone);

//update headphone with id
router.put('/:id', headphonesController.updateheadphone);

//delete headphone
router.delete('/:id', headphonesController.deleteheadphone);
module.exports = router;