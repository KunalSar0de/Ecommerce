const SwaggerController = require('../src/Controller/swaggerController');

var swaggerController = new SwaggerController();
console.info(' Initiating swagger generation ** ');
swaggerController.registerRoutes();