

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

module.exports = {
    createCustomerService, createArrayCustomerService
}