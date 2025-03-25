const { createTaskService, getAllTaskService, updateTaskService, deleteTaskService } = require("../services/taskServices");

module.exports = {
    postCreateTask: async (req, res) => {
        let result = await createTaskService(req.body);
        return res.status(200).json({
            data: result,
            errorCode: 0
        })
    },
    getAllTask: async (req, res) => {
        let result = await getAllTaskService(req.query);
        return res.status(200).json({
            data: result,
            errorCode: 0
        })
    },
    putUpdateTask: async (req, res) => {
        let task = await updateTaskService(req.body);
        if (task) {
            return res.status(200).json({
                data: task,
                errorCode: 0
            })
        }
    },
    deleteATask: async (req, res) => {
        let task = req.body.id;
        let result = await deleteTaskService(task);
        if (result) {
            return res.status(200).json({
                data: task,
                errorCode: 0
            })
        }
    }
}