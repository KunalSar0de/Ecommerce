const express = require("express");

const { 
	createOrder,
	getAllOrder
} = require("../Controller/orderController");

const { authMiddleware } = require("../Middleware/authMiddleware");

const router = express.Router();


router.post("/", authMiddleware, createOrder);
router.get("/:userId", authMiddleware, getAllOrder);


module.exports = router;
