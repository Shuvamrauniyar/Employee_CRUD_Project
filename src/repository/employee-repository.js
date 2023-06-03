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
module.exports = {
    createEmp
}