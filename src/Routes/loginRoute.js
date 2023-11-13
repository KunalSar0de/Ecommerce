const express=require("express");
const { createUser ,loginUser} = require("../controller/sessionController");
const { authMiddleware } = require("../Middleware/authMiddleware");

const router = express.Router();


router.post("/login",loginUser);
router.post("/register", authMiddleware, createUser);


module.exports=router;