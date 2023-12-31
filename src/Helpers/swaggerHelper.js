
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'E-commerce documentation',
			version: '1.0.0',
			description: 'A simple Express Node.js API Project',
		},
		components: {
			securitySchemes: {
				BearerAuth: {
					type: 'http',
					in: 'header',
					name: 'Authorization',
					description: 'Bearer Token',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
		},
		servers: [
			{
				url: process.env.CYCLIC_URL,
				description: process.env.SERVER_DESC
			},
		],
	},

	apis: [
		'./Routes/*.js', './SwaggerDefinations/*.js'
	]
};

const swaggerSpecification = swaggerJsDoc(options);

module.exports = swaggerSpecification;
