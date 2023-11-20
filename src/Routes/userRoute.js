const express = require("express");
const { 
	createUser,
	getAllUsers
} = require("../Controller/userController.js");
const { authMiddleware } = require("../Middleware/authMiddleware");

const router = express.Router();


router.post("/", authMiddleware, createUser);
router.get("/", authMiddleware, getAllUsers);


module.exports=router;