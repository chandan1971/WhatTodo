const {Router}=require("express");
const { getTodo, deleteTodo, updateTodo } = require("../controllers/todo.controller");
const {saveTodo} = require("../controllers/todo.controller");
const verifyToken=require('../utils/verifyToken')

const router=Router()

router.get('/',verifyToken,getTodo)
router.post('/save',verifyToken,saveTodo)
router.post('/delete',deleteTodo)
router.post('/update',updateTodo)

module.exports=router;
