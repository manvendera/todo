const Todo = require('../models/Todo');

exports.getTodobyId = async (req, res) => {
    try {
        const id = req.params.id;
        const todoById = await Todo.findById({ _id: id })

        if (!todoById) {
            return res.status(404).json({
                success: false,
                message: "No Data Found By id"
            })
        }

        res.status(200).json({
            success: true,
            data: todoById,
            message: "Entier data is fetched"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: error,
            message: error.message
        })
    }
} 