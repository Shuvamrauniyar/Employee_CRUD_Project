const express = require('express');
const router = express.Router();
const employeeController = require('../../controller/employee-controller');

router.post('/createEmp',employeeController.createEmp);

module.exports = router;