const Todo = require('../models/Todo');
exports.getTodo = async(req,res)=>{
    try {
        // fetch all todo items form data base
        const todos = await Todo.find({});
        // response 
        res.status(200).json({
            success:true,
            data:todos,
            message:"enteir data is fetched"
        })
    } catch (error) {
        console.log('erroer');
        console.error(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
             
        })
    }
}
