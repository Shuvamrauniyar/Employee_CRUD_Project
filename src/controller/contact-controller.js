const contactRepo = require('../repository/contact-repository');

const createContact = async(req,res)=>{
    try {
        // console.log(req.body);
        const response = await contactRepo.createContact(req.body);
        return res.status(200).json({
            success: true,
            message: 'Contact data created successfully',
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
        const response = await contactRepo.getAll(req.params.page);
        return res.status(200).json({
            success: true,
            message: 'Contact data fetched successfully',
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
        const response = await contactRepo.update(req.params.emp_id,req.body);
        return res.status(200).json({
            success: true,
            message: 'Contact data updated successfully',
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
        const response = await contactRepo.delete_data(req.params.emp_id);
        return res.status(200).json({
            success: true,
            message: 'Contact data deleted successfully',
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
    createContact,
    getAll,
    update,
    delete_data
}