
const { uploadSingle } = require('../services/fileServices')
const { createCustomerService } = require('../services/customerServices')

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
    }
}