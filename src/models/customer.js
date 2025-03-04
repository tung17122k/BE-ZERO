const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


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

},
    {
        timestamps: true,
        // statics: {
        //     findByname(name) {
        //         return this.find({ name: new RegExp(name, 'i') });
        //     }
        // }
    }
)

customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;