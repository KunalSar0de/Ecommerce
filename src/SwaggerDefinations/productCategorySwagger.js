/**
 * @openapi
 * tags:
 *   - name: Product Category Management
 *     description: Endpoints for product category
 * paths:
 *   /category:
 *     get:
 *       description: Product Category Listing Api.
 *       tags: [Product Category Management] 
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               example:
 *                 message: 200 Ok
 *         '401':
 *           content:
 *             application/json:
 *               example:
 *                 error: Invalid Credentials
 * 
 */


/**
 * @openapi
 * tags:
 *   - name: Product Category Management
 *     description: Endpoints for product category
 * paths:
 *   /category/{categoryId}/products:
 *     get:
 *       description: Products Using Category Id.
 *       tags: [Product Category Management] 
 *       parameters:
 *         - name: categoryId
 *           in: path
 *           description: Category Id
 *           required: true
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               example:
 *                 message: 200 Ok
 *         '401':
 *           content:
 *             application/json:
 *               example:
 *                 error: Invalid Credentials
 * 
 */


/**
 * @openapi
 * tags:
 *   - name: Product Management
 *     description: Endpoints for products
 * paths:
 *   /product/{productId}:
 *     get:
 *       description: Products List Using product Id
 *       tags: [Product Management] 
 *       parameters:
 *         - name: productId
 *           in: path
 *           description: Product Id
 *           required: true
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               example:
 *                 message: 200 Ok
 *         '401':
 *           content:
 *             application/json:
 *               example:
 *                 error: Invalid Credentials
 * 
 */