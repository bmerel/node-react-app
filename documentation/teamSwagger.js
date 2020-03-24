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
* /api/v1/team/bio/{user}:
*   get:
*     tags:
*       - Team
*     summary: Returns bio information associated to a team you have access to view data
*     description: Use this API to get bio information about the employees on your team that you have access to view
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/team/bio/{user}/{employee}:
*   get:
*     tags:
*       - Team
*     summary: Returns the bio information associated to an employee you have access to view
*     description: Use this API to get bio information about an employee on your team that you have access to view
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
* /api/v1/team/performance/{user}:
*   get:
*     tags:
*       - Team
*     summary: Returns performance information associated to a team you have access to view data
*     description: Use this API to get performance information about the employees on your team that you have access to view
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/team/performance/{user}/{employee}:
*   get:
*     tags:
*       - Team
*     summary: Returns the performance information associated to an employee you have access to view
*     description: Use this API to get performance information about an employee on your team that you have access to view
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
* /api/v1/team/par/{user}:
*   get:
*     tags:
*       - Team
*     summary: Returns par information associated to a team you have access to view data
*     description: Use this API to get par information about the employees on your team that you have access to view
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/team/par/{user}/{employee}:
*   get:
*     tags:
*       - Team
*     summary: Returns the par information associated to an employee you have access to view
*     description: Use this API to get par information about an employee on your team that you have access to view
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
