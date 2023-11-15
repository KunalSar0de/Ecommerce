const express = require("express");
const
{
	getProductByProductId,
	getAllProducts,
	addProduct,
	updateProduct,
	deleteProduct
} = require("../Controller/productController");
const router = express.Router();
const {authMiddleware } = require("../Middleware/authMiddleware");


//get products using product id
router.get("/:productId",authMiddleware, getProductByProductId);
router.get("/",authMiddleware, getAllProducts);
router.post("/",authMiddleware, addProduct);
router.put("/",authMiddleware, updateProduct);
router.delete("/:productId",authMiddleware, deleteProduct);

module.exports = router;