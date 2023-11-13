const express = require("express");

const { 
	addProductToCart,
	getAllAddedProductsInCart,
	updateQuantityFromCart,
	removeProductFromCart
} = require("../Controller/cartController");

const { authMiddleware } = require("../Middleware/authMiddleware");

const router = express.Router();


router.post("/", authMiddleware, addProductToCart);
router.get("/:userId" ,authMiddleware, getAllAddedProductsInCart);
router.put("/", authMiddleware, updateQuantityFromCart);
router.delete("/", authMiddleware, removeProductFromCart);

module.exports = router;


