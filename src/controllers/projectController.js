const { createProjectService, getAllProjectService, updateProjectService, deleteProjectService } = require("../services/projectServices");

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
    },
    putUpdateProject: async (req, res) => {
        let project = await updateProjectService(req.body);
        if (project) {
            return res.status(200).json({
                data: project,
                errorCode: 0
            })
        }
    },
    deleteAProject: async (req, res) => {
        let project = req.body.id;
        let result = await deleteProjectService(project);
        if (result) {
            return res.status(200).json({
                data: project,
                errorCode: 0
            })
        }
    }
}

