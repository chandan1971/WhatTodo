const todoModel=require("../models/todo.model")
const errorHandler=require('../utils/error.js')


module.exports.getTodo=async (req,res)=>{
    console.log(req);
    const id=req.user.id;
    const todo =await todoModel.find({id})
    res.send(todo)

}

module.exports.saveTodo=async(req,res,next)=>{
    const {text}=req.body;
    if(!text || text===' '){
        errorHandler(400,"Please fill the text");
    }
    const id=req.user.id;
    const newTodo=new todoModel({
        id,
        text
    })
    try {
        await newTodo.save();
        res.status(200).send(newTodo);
    } catch (error) {
        next(error);
    }
}


module.exports.updateTodo=(async(req,res)=>{
    const {_id,text}=req.body
    todoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send(`Updated Successfully...`))
    .catch((err)=>{
        console.log(err);
    })
})

module.exports.deleteTodo=(async(req,res)=>{
    const{_id}=req.body
    todoModel
    .findByIdAndDelete(_id)
    .then(()=>{
        res.send(`Deleted Successfully....`)
    })
    .catch((err)=>{
        console.log(err);
    })
})