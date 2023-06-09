const employeeRepo = require('../repository/employee-repository');

const createEmp = async(req,res)=>{
    try {
        // console.log(req.body);
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
const getAll = async(req,res)=>{
    try {
        // console.log(req.body);
        const response = await employeeRepo.getAll(req.params.page);
        return res.status(200).json({
            success: true,
            message: 'Employee data fetched successfully',
            err:{},
            data:response
        });
    } catch (error) {
        console.log('error while fetching in controller layer');
        return res.status(500).json({
            success: false,
            message: 'Something went wrong in controller layer  ',
            data: {},
            err: error
        });
    }
}
const update = async(req,res)=>{
    try {
        // console.log(req.body);
        const response = await employeeRepo.update(req.params.id,req.body);
        return res.status(200).json({
            success: true,
            message: 'Employee data updated successfully',
            err:{},
            data:response
        });
    } catch (error) {
        console.log('error while updated in controller layer');
        return res.status(500).json({
            success: false,
            message: 'Something went wrong in controller layer  ',
            data: {},
            err: error
        });
    }
}
const delete_data = async(req,res)=>{
    try {
        // console.log(req.body);
        const response = await employeeRepo.delete_data(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Employee data deleted successfully',
            err:{},
            data:response
        });
    } catch (error) {
        console.log('error while deleted in controller layer');
        return res.status(500).json({
            success: false,
            message: 'Something went wrong in controller layer  ',
            data: {},
            err: error
        });
    }
}
module.exports = {
    createEmp,
    getAll,
    update,
    delete_data
}