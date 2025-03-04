

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

const getAllCustomerService = async () => {
    try {
        let result = await Customer.find({});
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

module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomerService, updateCustomerService
}