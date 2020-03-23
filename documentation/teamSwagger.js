/**
* @swagger
* /api/v1/team/all/{user}:
*   get:
*     tags:
*       - Team
*     summary: Returns information associated to a team you have access to view
*     description: Use this API to get information about the employees on your team that you have access to view
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/team/all/{user}/{employee}:
*   get:
*     tags:
*       - Team
*     summary: Returns the information associated to an employee you have access to view
*     description: Use this API to get information about an employee on your team that you have access to view
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
*       - in: path
*         name: employee
*         type: string
*         required: true
*         description: Unique identification of employee you have access to view
*/
