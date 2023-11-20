
/**
 * @openapi
 * tags:
 *   - name: User Management
 *     description: Endpoints for user management
 * paths:
 *   /user:
 *     post:
 *       description: create new user.
 *       tags: [User Management] 
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userName:
 *                   type: string
 *                   description: The username of the user.
 *                 password:
 *                   type: string
 *                   description: The password of the user.
 *                 userType:
 *                   type: string
 *                   description: The username of the user.
 *                 isActive:
 *                   type: boolean
 *                   description: The password of the user.
 *                 profile:
 *                   type: object
 *                   description: The password of the user.
 *                   properties:
 *                     firstName:
 *                         type: string
 *                         description: The firstname of user
 *                     lastName:
 *                         type: string
 *                         description: The lastName of user
 *                     email:
 *                         type: string
 *                         description: The email of user
 *                     phoneNumber:
 *                         type: string
 *                         description: The phoneNumber of user
 *                 address:
 *                   type: object
 *                   description: The password of the user.
 *                   properties:
 *                     addressLine1:
 *                         type: string
 *                         description: The addressLine1 of user
 *                     addressLine2:
 *                         type: string
 *                         description: The addressLine2 of user
 *                     pinCode:
 *                         type: string
 *                         description: The pinCode of user
 *                     state:
 *                         type: string
 *                         description: The state of user
 *                     country:
 *                         type: string
 *                         description: The country of user
 *               required:
 *                 - userName
 *                 - password
 *                 - userType
 *                 - isActive
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '201':
 *           description: Successful login
 *           content:
 *             application/json:
 *               example:
 *                 message: User Created successful
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
 *   - name: User Management
 *     description: Endpoints for user management
 * paths:
 *   /user:
 *     get:
 *       description: Get all users
 *       tags: [User Management] 
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     userId:
 *                       type: string
 *                     userName:
 *                       type: string
 *                     userType:
 *                       type: string
 *                     isAdmin:
 *                       type: boolean
 *                     isActive:
 *                       type: boolean
 *                     createdOn:
 *                       type: string
 *                     profile:
 *                       type: object
 *                       properties:
 *                         firstName:
 *                           type: string
 *                         lastName:
 *                           type: string
 *                         email:
 *                           type: string
 *                         phoneNumber:
 *                           type: string
 *                     address:
 *                       type: object
 *                       properties:
 *                         addressLine1:
 *                           type: string
 *                         addressLine2:
 *                           type: string
 *                         pinCode:
 *                           type: string
 *                         state:
 *                           type: string
 *                         country:
 *                           type: string
 *         '401':
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               example:
 *                 error: Invalid Credentials
 * 
 */
