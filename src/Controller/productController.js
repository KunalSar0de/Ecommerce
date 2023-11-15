const Product = require("../Models/productModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../Utils/validateMongodbId");


const getProductByProductId = asyncHandler(async (req, res) => {
	try {
		const reqestProductId = req.params.productId;
		validateMongoDbId(reqestProductId);
		var data = await Product.findById(reqestProductId);
		res.json(data);
	}
	catch (error) {
		throw new Error("No data found");
	}
})


const getAllProducts = asyncHandler(async (req, res) => {
	try {
		var products = await Product.find({availability : true});
		if(!products)
		{
			return res.status(404).json({ message: 'Products not found' });
		}

		const response = products.map(items => ({
			productId : items._id, 
			title : items.title,
			price : items.price,
			description : items.description,
			availability : items.availability
		}));
		res.json(response);
	}
	catch (error) {
		throw new Error("No data found");
	}
})

const addProduct = asyncHandler(async (req, res) => {
	try {
				
		if (!req.user.isAdmin) {
			return res.status(401).json({"message":"User is not authorized to perform this action!"});
		}
		
		const reqestCategoryId = req.body.categoryId;
		validateMongoDbId(reqestCategoryId);

		if(req.body.price == 0)
		{
			throw new Error("Product price should be greater than 0")
		}

		if(req.body.quantity > 0)
		{
			req.body.availability = true;
		}
		else
		{
			throw new Error("Product quantity should be greater than 0");
		}

		var addedProduct = await Product.create(req.body);

		const response = {
			productId : addedProduct._id, 
			title : addedProduct.title,
			price : addedProduct.price,
			description : addedProduct.description,
			availability : addedProduct.availability
		}

		res.json(response);
	}
	catch (error) {
		throw new Error(error);
	}
})

const updateProduct = asyncHandler(async (req, res) => {
	try {
		if (!req.user.isAdmin) {
			return res.status(401).json({"message":"User is not authorized to perform this action!"});
		}

		const reqestProductId = req.body.productId;
		validateMongoDbId(reqestProductId);
		const filter = {_id : reqestProductId};
		const updatedValue = {
			$set:{
				title:req.body.title,
				price:req.body.price,
				description:req.body.description,
				categoryId:req.body.categoryId,
				quantity:req.body.quantity,
			}
		}
		
		await Product.updateOne(filter,updatedValue);
		res.status(200);
	}
	catch (error) {
		throw new Error(error);
	}
})


const deleteProduct = asyncHandler(async (req, res) => {
	try {
		if (!req.user.isAdmin) {
			return res.status(401).json({"message":"User is not authorized to perform this action!"});
		}
	

		const reqestProductId = req.params.productId;
		validateMongoDbId(reqestProductId);
		
		const filter = {_id : reqestProductId};
		const updatedValue = {
			$set :{
				availability : false
			}
		}

		await Product.updateOne(filter, updatedValue);
		
		res.status(200).json();
	}
	catch (error) {
		throw new Error("No data found");
	}
})


module.exports = {
	getProductByProductId,
	getAllProducts,
	addProduct,
	updateProduct,
	deleteProduct
};
