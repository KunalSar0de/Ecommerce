/**
 * @openapi
 * tags:
 *   - name: Order Management
 *     description: Endpoints for Order Management
 * paths:
 *   /order:
 *     post:
 *       description: Execute order
 *       tags: [Order Management] 
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 cartId:
 *                   type: string
 *                 paymentMode:
 *                   type: string
 *               required:
 *                 - userId
 *                 - cartId
 *                 - paymentMode
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   orderId:
 *                     type: string
 *                   orderDate:
 *                     type: string
 *                   isAmountPaid:
 *                     type: boolean
 *                   orderStatus:
 *                     type: string
 *                   orderAmount:
 *                     type: number
 *                   paymentMode:
 *                     type: number
 *                   items:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         productId:
 *                           type: string
 *                         quantity:
 *                           type: integer
 *                         price:
 *                           type: number
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
 *   - name: Order Management
 *     description: Endpoints for Order Management
 * paths:
 *   /order/{userId}:
 *     get:
 *       description: Execute orders
 *       tags: [Order Management] 
 *       parameters:
 *         - name: userId
 *           in: path
 *           required: true
 *           schema:
 *             type: string
 *       security:
 *         - BearerAuth: []
 *       responses:
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


