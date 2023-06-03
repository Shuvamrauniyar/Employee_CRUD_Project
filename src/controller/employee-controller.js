const employeeRepo = require('../repository/employee-repository');

const createEmp = async(req,res)=>{
    try {
        console.log(req.body);
        const response = await employeeRepo.createEmp(req.body);
        return res.status(200).json({
            success: true,
            message: 'Employee data created successfully',
            err:{},
            data:response
        });
    } catch (error) {
        console.log('error while creating in controller layer');
        return res.status(500).json({
            success: false,
            message: 'Something went wrong in controller layer  ',
            data: {},
            err: error
        });
    }
}
module.exports = {
    createEmp
}