const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require('./Helpers/dbConnectHelper');

//Route calling
const loginRoute = require("./Routes/loginRoute");
const cartRoute = require("./Routes/cartRoute");
const orderRoute = require("./Routes/orderRoute");
const productRoute = require("./Routes/productRoute");
const userRoute = require("./Routes/userRoute");
const productCategoryRoute = require("./Routes/productCategoryRoute");

const dotEnv = require("dotenv").config();

const { notFound, errorHandler } = require("./Middleware/errorHandler");

//swagger
const swaggerUi = require("swagger-ui-express");
const swaggerSpecification = require('./Helpers/swaggerHelper');


const initialize = async (callback) => {
	let initError;

	try {
		dbConnect();
	} catch (err) {
		initError = err;
	}
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecification));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use("/session", loginRoute);
	app.use("/user", userRoute);
	app.use("/product", productRoute);
	app.use("/cart", cartRoute);
	app.use("/order", orderRoute);
	app.use("/category", productCategoryRoute);

	app.use(notFound);
	app.use(errorHandler);

	callback(initError, app);

}


module.exports = {
	initialize
}