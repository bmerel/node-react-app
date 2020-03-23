const express = require('express');
const router = express.Router();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'HRLink API',
      description: 'Employee API To Obtain Data About Themselves & The Individuals On Teams They Manage',
      version: '1.0.0',
    }
  },
  apis: ['./documentation/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
router.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = router;
