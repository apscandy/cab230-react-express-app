import { Router } from 'express';
const DataRouter = Router()


/** 
 * @swagger
 * tags:
 *   name: Data
*/

/**
 * @swagger
 * /countries:
 *   get:
 *     tags: [Data]
 *     description: Returns a list of all countries that are associated with one or more volcanoes, ordered alphabetically.
 *     
 *     responses:
 *       200:
 *         description: An array of countries. An example of the first five elements in the array is shown below.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *               example: ["Algeria","Antarctica","Argentina","Armenia","Australia"]
 *                   
 *       400:
 *         description: Invalid query parameters.
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
 *                   example: Invalid query parameters. Query parameters are not permitted.
 */
DataRouter.get("/countries", (req, res) => {
    res.send({ data: "working"})
});


/**
 * @swagger
 * /volcanoes:
 *   get:
 *     tags: [Data]
 *     description: Returns a list of volcanoes that are associated with the queried country. The country query parameter is required. The list can optionally be filtered by using the populatedWithin query parameter. This will return a filtered list of volcanoes that have at least one person living within the provided radius.
 *     parameters:
 *       - in: query
 *         name: country
 *         required: true
 *         description: Name of country
 *         schema:
 *           type: string
 *       - in: query
 *         name: Distance
 *         description: Distance within X km of a volcano
 *         schema:
 *           type: string
 *           enum: ["5km", "10km", "30km", "100km"]
 * 
 *     responses:
 *       200:
 *         description: An array of countries. An example of the first five elements in the array is shown below.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Abu
 *                   country:
 *                     type: string
 *                     example: Japan
 *                   region:
 *                     type: string
 *                     example: Japan, Taiwan, Marianas
 *                   subregion:
 *                     type: string
 *                     example: Honshu
 *                   
 *       400:
 *         description: Invalid query parameters.
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
 *                   example: Country is a required query parameter.
 */
DataRouter.get("/volcanoes", (req, res) => {
    res.send({ data: "working"}).json()
});


/**
 * @swagger
 * /volcano/{id}:
 *   get:
 *     tags: [Data]
 *     description: Returns a list of volcanoes that are associated with the queried country. The country query parameter is required. The list can optionally be filtered by using the populatedWithin query parameter. This will return a filtered list of volcanoes that have at least one person living within the provided radius.
 *     parameters:
 *       - in: path
 *         name: userId
 *         type: integer
 *         required: true
 *         description: The ID of the volcano
 *
 * 
 *     responses:
 *       200:
 *         description: Returns an object containing name, country, region, subregion, last eruption, summit, elevation, latitude and longitude data for the queried volcano. If a valid JWT token is sent in the header of the request, population data for 5km, 10km, 30km and 100km is also provided. An example of one object (with an authenticated request) is shown below.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: Abu
 *                 country:
 *                   type: string
 *                   example: Japan
 *                 region:
 *                   type: string
 *                   example: Japan, Taiwan, Marianas
 *                 subregion:
 *                   type: string
 *                   example: Honshu
 *                 last_eruption:
 *                   type: string
 *                   example: 6850 BCE
 *                 summit:
 *                   type: number
 *                   example: 641
 *                 elevation:
 *                   type: number
 *                   example: Japan, Taiwan, Marianas
 *                 latitude:
 *                   type: string
 *                   example: "34.5000"
 *                 longitude:
 *                   type: string
 *                   example: "131.6000"
 *                 population_5km:
 *                   type: number
 *                   example: 3597
 *                 population_10km:
 *                   type: number
 *                   example: 9594
 *                 population_30km:
 *                   type: number
 *                   example: 117805
 *                 population_100km:
 *                   type: number
 *                   example: 4071152
 *                   
 *       400:
 *         description: Invalid parameters
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
 *                   example: Invalid query parameters. Query parameters are not permitted..
 *       401:
 *         description: Unauthorized. Click on 'Schema' below to see the possible error responses.
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
 *                   example: Invalid JWT token.
 */
DataRouter.get("/volcano/:Id", (req, res) => {
    res.send({ data: "working", id: req.params.Id }).json()
});


export default DataRouter;