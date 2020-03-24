const express = require('express');
const teamController = require('../controllers/teamController');
const router = express.Router();

// Define routes with parameters
router.get('/api/v1/team/all/:user', teamController.teamAll);
router.get('/api/v1/team/all/:user/:employee', teamController.teamAllEmployee);
router.get('/api/v1/team/bio/:user', teamController.teamBio);
router.get('/api/v1/team/bio/:user/:employee', teamController.teamBioEmployee);
router.get('/api/v1/team/performance/:user', teamController.teamPerformance);
router.get('/api/v1/team/performance/:user/:employee', teamController.teamPerformanceEmployee);
router.get('/api/v1/team/par/:user', teamController.teamPar);
router.get('/api/v1/team/par/:user/:employee', teamController.teamParEmployee);

//
module.exports = router;
