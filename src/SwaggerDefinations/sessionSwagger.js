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
