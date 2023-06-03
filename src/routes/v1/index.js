const express = require('express');
const router = express.Router();
const employeeController = require('../../controller/employee-controller');
const contactController = require('../../controller/contact-controller');

router.post('/createEmp',employeeController.createEmp);
router.get('/:page',employeeController.getAll);
router.patch('/:id',employeeController.update);
router.delete('/:id',employeeController.delete_data);

router.post('/createContact',contactController.createContact);
router.get('/contact/:page',contactController.getAll);
router.patch('/update/:emp_id',contactController.update);
router.delete('/deleteContact/:emp_id',contactController.delete_data);

module.exports = router;