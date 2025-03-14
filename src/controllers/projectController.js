const { createProjectService, getAllProjectService } = require("../services/projectServices");

module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProjectService(req.body);
        return res.status(200).json({
            data: result,
            errorCode: 0
        })
    },
    getAllProject: async (req, res) => {
        let result = await getAllProjectService(req.query);
        return res.status(200).json({
            data: result,
            errorCode: 0
        })
    }

}

