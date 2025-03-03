

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

module.exports = {
    createCustomerService
}