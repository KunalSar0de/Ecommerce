const Category = require("../Models/productCategoryModel");
const asyncHandler = require("express-async-handler");
const Product = require("../Models/productModel");
const validateMongoDbId = require("../Utils/validateMongodbId");


const getAllCategories = asyncHandler(async(req, res) => {
	try{
		const listOfCategory = await Category.find();
		if(!listOfCategory)
		{
			return res.status(404).json({ message: 'Cart Details not found' });
		}

		const response = listOfCategory.map(item => ({
			categoryId : item._id,
			title: item.title,
		}))

		res.json(response);
	}catch(error){
		throw new Error("No categories Found");
	}
});


const getProductsBasedOnCategoryId = asyncHandler(async (req, res) => {
	try {
		const reqCategoryId = req.params.categoryId;
		validateMongoDbId(reqCategoryId);
		const productsBasedOnCategory =  await Product.find({ categoryId: req.params.categoryId , availability : true}, 'title price description availability _id');		
		
		if(!productsBasedOnCategory)
		{
			throw new Error("Products not found");
		}
		
		const response = productsBasedOnCategory.map(item => ({
			productId: item._id,
			title: item.title,
			price: item.price,
			description: item.description,
			availability: item.availability
		}))

		res.json(response);
	}
	catch (error) {
		throw new Error("No data found");
	}
})


module.exports =
{
	getAllCategories,
	getProductsBasedOnCategoryId
}