
const { uploadSingle } = require('../services/fileServices')
const { createCustomerService, createArrayCustomerService, getAllCustomerService } = require('../services/customerServices')


module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, email, address, phone, description, image } = req.body;
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
    getCreateCustomer: async (req, res) => {
        let customers = await getAllCustomerService();
        if (customers) {
            return res.status(200).json({
                data: customers,
                errorCode: 0
            })
        }
    }
}