const swaggerJSDoc = require('swagger-jsdoc')
const SwaggerParser = require('swagger-parser')

const fs = require('fs');
const swaggerDefinition = require('../Helpers/swaggerHelper')

class SwaggerController {
    async registerRoutes(server) {
        console.log('SwaggerController registerRoutes called');
        var options = {
            swaggerDefinition: swaggerDefinition,
			apis: ['SwaggerDefinations/*.js']
        };

        // initialize swagger-jsdoc
        const swaggerSpec = swaggerJSDoc(options)
        const swaggerJson = JSON.parse(JSON.stringify(swaggerSpec))
        try {
            // const swagger = await addCustomElements(swaggerJson)
            await writeToFile('Ecomm-API.json', swaggerJson);
            await SwaggerParser.validate(swaggerJson);
            exposeSwagger(server, swagger);
        } catch (err) {
            console.log(err)
        }
    }
}




function exposeSwagger(server, swagger) {
    const swaggerOptions = {
        customSiteTitle: 'My Service',
        customCss: '.topbar { display: none }',
    };

}



const writeToFile = async(fileName, swaggerString) => {
    fs.writeFile(fileName, swaggerString, err => {
        if (err) {
            throw err;
        }
        console.log('Swagger specification is ready.');
    });
}

const addCustomElements = async(jsonData) => {
    for (var key in jsonData.paths) {
        if (jsonData.paths.hasOwnProperty(key)) {
            addCorsTag();
        }
    }



    function addCorsTag() {
        if (jsonData.paths[key].options != undefined) {
            addResponseCorsTag();
            addAWSCorsTag();
        }
    }

    function addAWSCorsTag() {
        const awscors = {
            responses: {
                default: {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Methods': "'PUT,POST,GET,DELETE,OPTIONS'",
                        'method.response.header.Access-Control-Allow-Headers': "'Content-Type,X-Amz-Date,Authorization,X-Api-Key'",
                        'method.response.header.Access-Control-Allow-Origin': "'*'"
                    }
                }
            },
            passthroughBehavior: 'when_no_match',
            requestTemplates: {
                'application/json': '{"statusCode": 200}'
            },
            type: 'mock'
        };
        jsonData.paths[key].options['x-amazon-apigateway-integration'] = awscors;
    }

    function addResponseCorsTag() {
        const cors = {
            description: 'Successful operation',
            headers: {
                'Access-Control-Allow-Origin': {
                    description: 'URI that may access the resource',
                    type: 'string'
                },
                'Access-Control-Allow-Methods': {
                    description: 'Method or methods allowed when accessing the resource',
                    type: 'string'
                },
                'Access-Control-Allow-Headers': {
                    description: 'Used in response to a preflight request to indicate which HTTP headers can be used when making the request.',
                    type: 'string'
                }
            }
        };

        jsonData.paths[key].options['responses']['200'] = cors;
    }

    function addAWSIntegrationTag() {
        Object.values(jsonData.paths[key]).forEach((method) => {
            let api = (method.functionName)?method.functionName:"WebCrawler-API";
            let awsintegration = {
            type: 'aws_proxy',
            uri: `arn:aws:apigateway:ap-south-1:lambda:path/2015-03-31/functions/arn:aws:lambda:ap-south-1:aws-account-id:function:${api}/invocations`,
            httpMethod: 'POST',
            credentials: 'arn:aws:iam::aws-account-id:role/MyLambdaRole'
            };
            method['x-amazon-apigateway-integration'] = awsintegration;

        })

    }

    function ResolveAndAddAccessTags() {
        Object.values(jsonData.paths[key]).forEach((method) => {
            const accessrights = method['accessrights'];
            if (accessrights != undefined) {
                switch (accessrights[0].userType) {
                    case 'SuperAdmin':
                        addHPGAccessControlTag(method, accessrights);
                        break;
                    case 'Admin':
                        addHPGAccessControlTag(method, accessrights);
                        break;
                    case 'Sales':
                        addHPGAccessControlTag(method, accessrights);
                        break;
					case 'Operations':
						addHPGAccessControlTag(method, accessrights);
						break;
					case 'Approver':
						addHPGAccessControlTag(method, accessrights);
						break;
					case 'Legal':
						addHPGAccessControlTag(method, accessrights);
						break;
					case 'Merchant':
						addHPGAccessControlTag(method, accessrights);
						break;
                    default:
                        console.log(accessrights[0].userType);
                        console.log('no defined usertype found');
                }
            }
        });

    }

    function addHPGAccessControlTag(method, accessrights) {
        console.log(JSON.stringify(accessrights))
        for (var i = 0; i < accessrights.length; i++) {
            if (accessrights[i].userType != undefined) {
                customTag = {
                    operationId: accessrights[i].accessForm,
                    action: accessrights[i].userAction,
                };
                const accesskey = 'x-op-accesscontrol-' + accessrights[i].userType.toLowerCase();
                method[accesskey] = customTag;
            }

        }

        delete method['accessrights']
    }

    return JSON.stringify(jsonData)
        //return jsonData
}

module.exports = SwaggerController;