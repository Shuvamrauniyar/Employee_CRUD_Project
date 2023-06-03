const {ContactDetails} = require('../models/index')

const createContact = async(data)=>{
    try {
        const response = await ContactDetails.create(data);
        console.log(response);
        return response;
    } catch (error) {
        console.log('error occured while creating in repo layer');
        throw error;
    }
}
const getAll = async(page)=>{
    try {
        limit = 5;
        offset = limit * (page-1) //oofset means no. records to be skipped
        const response = await ContactDetails.findAll({
            limit: limit,
            offset: offset,
            $sort: {emp_id: 1}
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
        const emp_data = await ContactDetails.update(data,{
            where:{
                emp_id : emp_id
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
        const response = await ContactDetails.destroy({
            where: {
                emp_id: emp_id
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
    createContact,
    getAll,
    update,
    delete_data
}