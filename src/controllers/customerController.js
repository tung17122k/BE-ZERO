
const { uploadSingle } = require('../services/fileServices')
const { createCustomerService, createArrayCustomerService, getAllCustomerService, updateCustomerService, deleteACustomerService, deleteArrayCustomerService } = require('../services/customerServices')
const Joi = require('joi');



module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, email, address, phone, description, image } = req.body;

        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            address: Joi.string(),

            phone: Joi.string().pattern(new RegExp('^[0-9]{11}$')),

            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

            description: Joi.string(),
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                msg: error
            })
        } else {
            let imgUrl = "";
            if (!req.files || Object.keys(req.files).length === 0) {
                // khong lam gi ca 
            } else {
                let result = await uploadSingle(req.files.image);
                imgUrl = result.path;
            }
            let customer = await createCustomerService({ name, email, address, phone, description, image: imgUrl });
            return res.status(200).json({
                data: customer,
                errorCode: 0
            })
        }
    },
    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers);
        if (customers) {
            return res.status(200).json({
                data: customers,
                errorCode: 0
            })
        } else {
            return res.status(500).json({
                data: null,
                errorCode: 1,
                message: "Create customers failed"
            })
        }

    },
    getAllCustomer: async (req, res) => {
        const { limit, page } = req.query;
        let customers = [];
        if (limit && page) {
            customers = await getAllCustomerService(limit, page, req.query);
        } else {
            customers = await getAllCustomerService();
        }

        if (customers) {
            return res.status(200).json({
                data: customers,
                errorCode: 0
            })
        }
    },
    putUpdateCustomer: async (req, res) => {
        let customer = await updateCustomerService(req.body);
        if (customer) {
            return res.status(200).json({
                data: customer,
                errorCode: 0
            })
        }
    },
    deleteACustomer: async (req, res) => {
        let id = req.body.id
        let result = await deleteACustomerService(id);
        if (result) {
            return res.status(200).json({
                data: result,
                errorCode: 0
            })
        }
    },
    deleteArrayCustomer: async (req, res) => {
        let customers = req.body.customers;
        let result = await deleteArrayCustomerService(customers);
        if (result) {
            return res.status(200).json({
                data: result,
                errorCode: 0
            })
        }
    }
}