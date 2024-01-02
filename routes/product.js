const express = require('express');
const router = express.Router();
const {getAllProducts, getAllProductsByTesting} = require('../controller/product')
router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsByTesting);

module.exports = router;