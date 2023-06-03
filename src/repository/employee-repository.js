const {EmpDetails, ContactDetails} = require('../models/index')

const createEmp = async(data)=>{
    try {
        const response = await EmpDetails.create(data);
        console.log(response);
        return response;
    } catch (error) {
        console.log('error occured while creating in repo layer');
        throw error;
    }
}
const getAll = async(page)=>{
    try {
        limit = 5; //page limit is 5 records per page
        offset = limit * (page-1) //oofset means no. records to be skipped
        const response = await EmpDetails.findAll({
            limit: limit, 
            offset: offset,
            $sort: {id: 1}
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log('error occured while fetching in repo layer');
        throw error;
    }
}
const update = async(emp_id,data)=>{
    try {
        const emp_data = await EmpDetails.update(data,{
            where:{
                id : emp_id
            },
        });
        return emp_data;
        // console.log(emp_data);
        return response;
    } catch (error) {
        console.log('error occured while updating in repo layer');
        throw error;
    }
}
const delete_data = async(emp_id)=>{
    try {
        const response = await EmpDetails.destroy({
            where: {
                id: emp_id
            },
        });
        // console.log(response);
        return response;
    } catch (error) {
        console.log('error occured while deleting in repo layer');
        throw error;
    }
}
module.exports = {
    createEmp,
    getAll,
    update,
    delete_data
}