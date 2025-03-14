const Project = require("../models/project");
const aqp = require('api-query-params');


const createProjectService = async (data) => {
    try {
        if (data.type === 'EMPTY-PROJECT') {
            let result = await Project.create(projectData);
            return result;
        }

        if (data.type === "ADD-USERS") {
            let myProject = await Project.findById(data.projectId).exec();

            // Duyệt qua từng user trong mảng usersArr
            for (const userId of data.usersArr) {
                // Kiểm tra user đã tồn tại trong project chưa
                const isUserExists = myProject.usersInfor.some(existingUser =>
                    existingUser.toString() === userId
                );
                // Chỉ thêm user nếu chưa tồn tại
                if (!isUserExists) {
                    myProject.usersInfor.push(userId);
                }
            }


            let newResult = await myProject.save();
            console.log(newResult);
            return newResult
        }
    } catch (error) {
        return null
    }
}

const getAllProjectService = async (queryString) => {
    try {
        let result = [];
        const page = queryString.page;
        const { filter, limit, population } = aqp(queryString);


        delete filter.page;
        let offset = (page - 1) * limit;
        if (limit && page) {
            result = await Project.find(filter).populate(population).limit(limit).skip(parseInt(offset)).exec();
        } else {
            result = await Project.find({});
        }
        return result
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createProjectService, getAllProjectService
}