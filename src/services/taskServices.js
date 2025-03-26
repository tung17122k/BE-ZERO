const Task = require("../models/task");
const aqp = require('api-query-params');

const createTaskService = async (data) => {
    try {
        if (data.type === 'EMPTY-TASK') {
            const task = await Task.create(data);
            return task
        }
    } catch (error) {
        console.log(error);
    }
}

const getAllTaskService = async (queryString) => {
    try {
        let result = [];
        const page = queryString.page;
        const { filter, limit } = aqp(queryString);
        delete filter.page;

        let offset = (page - 1) * limit;

        if (limit && page) {
            result = await Task.find(filter).limit(limit).skip(parseInt(offset)).exec();
        } else {
            result = await Task.find({});
        }
        return result

    } catch (error) {
        console.log(error);

    }
}

const updateTaskService = async (data) => {
    console.log("data", data);
    let result = await Task.updateOne({ _id: data.id }, { ...data });
    return result
}

const deleteTaskService = async (id) => {
    let result = await Task.deleteById(id);
    return result
}


module.exports = {
    createTaskService, getAllTaskService, updateTaskService, deleteTaskService
}