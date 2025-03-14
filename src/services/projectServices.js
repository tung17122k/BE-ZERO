const Project = require("../models/project");


const createProjectService = async (projectData) => {
    try {
        if (projectData.type === 'EMPTY-PROJECT') {
            let result = await Project.create(projectData);
            return result;
        }
    } catch (error) {
        return null
    }
}
module.exports = {
    createProjectService
}