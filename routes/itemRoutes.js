const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { validateItem } = require('./validation');
const { validateNewItem } = require('../validators/itemValidator');

router.get('/', itemController.getItems);
router.post('/', validateNewItem, validateItem, itemController.createItem);
router.put('/:id', validateItem, itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
