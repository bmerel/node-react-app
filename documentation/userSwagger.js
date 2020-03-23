/**
* @swagger
* /api/v1/user/all/{user}:
*   get:
*     tags:
*       - User
*     summary: Returns information associated to you
*     description: Use this API to access and get the details of information associated to you
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/user/bio/{user}:
*   get:
*     tags:
*       - User
*     summary: Returns a position/compensation/role information associated to you
*     description: Use this API to access and get the details of position/compensation/role information associated to you
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/user/performance/{user}:
*   get:
*     tags:
*       - User
*     summary: Returns a summary of performance associated to you
*     description: Use this API to access a summary of performance associated to you
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/user/performance/{user}/{id}:
*   get:
*     tags:
*       - User
*     summary: Returns a specific performance evaluation associated to you
*     description: Use this API to access and get the details of a specific performance evaluation associated to you
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
*         name: id
*         type: string
*         required: true
*         description: Unique identification of performance evaluation
* /api/v1/user/par/{user}/:
*   get:
*     tags:
*       - User
*     summary: Returns a summary of PARs associated to you
*     description: Use this API to access a summary of PARs associated to you
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/user/par/{user}/{id}:
*   get:
*     tags:
*       - User
*     summary: Returns a specific PAR associated to you
*     description: Use this API to access and get the details of a specific PAR associated to you
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
*         name: id
*         type: string
*         required: true
*         description: Unique identification of PAR
* /api/v1/user/transaction/{user}/:
*   get:
*     tags:
*       - User
*     summary: Returns a summary of transactions associated to you
*     description: Use this API to access a summary of transactions associated to you
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: Unique identification of user logged in
* /api/v1/user/transaction/{user}/{id}:
*   get:
*     tags:
*       - User
*     summary: Returns a specific transaction associated to you
*     description: Use this API to access and get the details of a specific transaction associated to you
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
*         name: id
*         type: string
*         required: true
*         description: ID of the transaction
* /api/v1/user/approval/{user}:
*   get:
*     tags:
*       - User
*     summary: Returns a summary of workflows associated to you
*     description: Use this API to access a summary of workflows associated to you
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: ID of the user
* /api/v1/user/approval/{user}/{id}:
*   get:
*     tags:
*       - User
*     summary: Returns a specific workflow associated to you
*     description: Use this API to access and get the details of a specific workflow associated to you
*     responses:
*       200:
*         description: Ok
*     parameters:
*       - in: path
*         name: user
*         type: string
*         required: true
*         description: ID of the user
*       - in: path
*         name: id
*         type: string
*         required: true
*         description: ID of the workflow
*/
