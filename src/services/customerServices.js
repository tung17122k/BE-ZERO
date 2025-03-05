

const Customer = require('../models/Customer');


const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create(customerData);
        console.log(">>>check result", result);
        return result;
    } catch (error) {
        console.log(">>>error", error);
        return null
    }
}

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result
    } catch (error) {
        console.log(error);
        return null
    }
}

const getAllCustomerService = async (limit, page) => {
    try {
        let result = [];
        if (limit && page) {
            result = await Customer.find({}).limit(limit).skip(parseInt((page - 1) * limit)).exec();
        } else {
            result = await Customer.find({});
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

const updateCustomerService = async (customerData) => {
    let { name, email, address, phone, description, image, id } = customerData;
    console.log(">>>check customerData", customerData);

    try {
        let result = await Customer.updateOne({ _id: id }, { name, email, address, phone, description, image });
        return result
    } catch (error) {
        console.log(error);
    }
}

const deleteACustomerService = async (id) => {
    try {
        let result = await Customer.deleteById({ _id: id })
        return result
    } catch (error) {
        console.log(error);
    }
}

const deleteArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.delete({ _id: { $in: arr } })
        return result
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomerService, updateCustomerService, deleteACustomerService, deleteArrayCustomerService
}