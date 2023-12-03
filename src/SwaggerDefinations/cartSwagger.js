/**
 * @openapi
 * tags:
 *   - name: Cart Management
 *     description: Endpoints for Cart Management
 * paths:
 *   /cart:
 *     post:
 *       description: Add products to cart
 *       tags: [Cart Management] 
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       productId:
 *                         type: string
 *                       quantity:
 *                         type: integer
 *               required:
 *                 - userId
 *                 - items
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 message: 200 Ok
 *         '401':
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               example:
 *                 error: Invalid Credentials
 * 
 */


/**
 * @openapi
 * tags:
 *   - name: Cart Management
 *     description: Endpoints for Cart Management
 * paths:
 *   /cart/{userId}:
 *     get:
 *       description: Get all products in cart
 *       tags: [Cart Management] 
 *       parameters:
 *         - name: userId
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   cartId:
 *                     type: string
 *                   items:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         productId:
 *                           type: string
 *                         quantity:
 *                           type: integer
 *         '401':
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               example:
 *                 error: Invalid Credentials
 * 
 */



/**
 * @openapi
 * tags:
 *   - name: Cart Management
 *     description: Endpoints for Cart Management
 * paths:
 *   /cart:
 *     put:
 *       description: Update products to cart
 *       tags: [Cart Management] 
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cartId:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 items:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       productId:
 *                         type: string
 *                       quantity:
 *                         type: integer
 *               required:
 *                 - userId
 *                 - items
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   cartId:
 *                     type: string
 *                   items:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         productId:
 *                           type: string
 *                         quantity:
 *                           type: integer
 *         '401':
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               example:
 *                 error: Invalid Credentials
 * 
 */


/**
 * @openapi
 * tags:
 *   - name: Cart Management
 *     description: Endpoints for Cart Management
 * paths:
 *   /cart:
 *     delete:
 *       description: Delete products from cart
 *       tags: [Cart Management] 
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cartId:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 productId:
 *                   type: string
 *               required:
 *                 - userId
 *                 - items
 *                 - productId
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 error: Product Deleted Successfully
 *         '401':
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               example:
 *                 error: Invalid Credentials
 * 
 */

