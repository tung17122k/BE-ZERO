const { createProjectService } = require("../services/projectServices");

module.exports = {
    postCreateProject: async (req, res) => {


        let result = await createProjectService(req.body);
        return res.status(200).json({
            data: result,
            errorCode: 0
        })
    }
}

