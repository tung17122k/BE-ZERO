const Project = require("../models/project");


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
module.exports = {
    createProjectService
}