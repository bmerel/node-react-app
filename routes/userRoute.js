const express = require('express');
const router = express.Router();

var userController = require('../controllers/userController');

router.get('/api/v1/user/all/:user', userController.userAll);
router.get('/api/v1/user/bio/:user', userController.userBio);
router.get('/api/v1/user/performance/:user', userController.userPerformance);
router.get('/api/v1/user/performance/:user/:id', userController.userPerformanceItem);
router.get('/api/v1/user/par/:user', userController.userPar);
router.get('/api/v1/user/par/:user/:id', userController.userParItem);
router.get('/api/v1/user/transaction/:user', userController.userTransaction);
router.get('/api/v1/user/transaction/:user/:id', userController.userTransactionItem);
router.get('/api/v1/user/approval/:user', userController.userApproval)
router.get('/api/v1/user/approval/:user/:id', userController.userApprovalItem);

module.exports = router;
