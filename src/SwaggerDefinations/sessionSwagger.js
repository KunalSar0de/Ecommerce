/**
 * @openapi
 * tags:
 *   - name: Session Management
 *     description: Endpoints for user management
 * paths:
 *   /session/login:
 *     post:
 *       description: Log in a user with the credentials.
 *       tags: [Session Management] 
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
 *               required:
 *                 - userName
 *                 - password
 *       responses:
 *         '200':
 *           description: Successful login
 *           content:
 *             application/json:
 *               example:
 *                 message: Login successful
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
 *   - name: Session Management
 *     description: Endpoints for user management
 * paths:
 *   /session/register:
 *     post:
 *       description: Log in a user with the credentials.
 *       tags: [Session Management] 
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


