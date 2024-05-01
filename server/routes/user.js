import { Router } from 'express';
const UserRouter = Router()

/** 
 * @swagger
 * tags:
 *   name: Authentication
*/

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags: [Authentication]
 *     description: Returns a list of all countries that are associated with one or more volcanoes, ordered alphabetically.
 *     
 *     responses:
 *       200:
 *         description: User successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: ajsonwebtoken
 *                 token_type:
 *                   type: string
 *                   example: Bearer
 *                 expires_in:
 *                   type: string
 *                   example: 86400
 *                   
 *       400:
 *         description: Invalid log in request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: bool
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Request body incomplete, both email and password are require
 *       401:
 *         description: Log in failed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: bool
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Incorrect email or password
 */
UserRouter.post("/login", (req, res) => {
    res.send({ data: "working" })
});

/**
 * @swagger
 * /user/register:
 *   post:
 *     tags: [Authentication]
 *     description: Returns a list of all countries that are associated with one or more volcanoes, ordered alphabetically.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               example: mike@gmail.com
 *             password:
 *               type: string
 *               example: password
 *     responses:
 *       201:
 *         description: User successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created
 *                   
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: bool
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Request body incomplete, both email and password are required
 *       409:
 *         description: User already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: bool
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: User already exists
 */

UserRouter.post("/register", (req, res) => {
    res.send({ data: "working" })
});


export default UserRouter; 