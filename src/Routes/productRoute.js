const express = require("express");
const {getProductByProductId} = require("../Controller/productController");
const router = express.Router();
const {authMiddleware } = require("../Middleware/authMiddleware");


//get products using product id
router.get("/:productId",authMiddleware, getProductByProductId);


module.exports = router;