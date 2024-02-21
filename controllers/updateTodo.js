// import todo model
const Todo = require('../models/Todo')

// define router handler
 
exports.updateTodo = async(req,res)=>{
   try {
    // first way to fetch id
   //  const id = req.params.id;
    // second way to find id
    const {id} = req.params;

    const {title,description} = req.body;
    const updateTodo = await Todo.findByIdAndUpdate(
        {_id: id},
        {title,description,updatedAt:Date.now()},
        );
    
        res.status(200).json({
        success:true,
        data:updateTodo,
        message: `updateTodo data successful fetched`
        })
        
      
   } catch (error) {
    console.log(error);
    res.status(500).json({
    success:false,
    error:error.message,
    message:"server Error"
    })
   }
}

