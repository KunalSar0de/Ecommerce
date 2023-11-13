const express = require("express");
const {  getProductsBasedOnCategoryId , getAllCategories } = require("../Controller/productCategoryController");
const router = express.Router();

const { authMiddleware } = require("../Middleware/authMiddleware");

router.get("/", authMiddleware, getAllCategories);
router.get("/:categoryId/products", authMiddleware, getProductsBasedOnCategoryId);

module.exports = router;
