const express=require("express");
const { loginUser} = require("../Controller/sessionController");
const { authMiddleware } = require("../Middleware/authMiddleware");

const router = express.Router();


router.post("/login",loginUser);



module.exports=router;