const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    description: String,
    image: String,

}, { timestamps: true })

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;