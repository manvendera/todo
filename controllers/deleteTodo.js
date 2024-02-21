const Todo = require('../models/Todo')

exports.deleteTodo = async (req, res) => {

    try {
        const { id } = req.params;
        const delteTodos = await Todo.findByIdAndDelete({ _id: id });
        res.status(200).json({
            success: true,
            data: delteTodos,
            message: "Todo Deleted"
        })
    } catch (error) {
        console.log("error aya hai");
        res.status(500).json({
            success: false,
            message: "sever fat gaya hai"
        })
    }

}