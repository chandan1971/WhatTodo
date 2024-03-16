import React from 'react'
import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { addTodo, getAllTodo ,updateTodo,deleteTodo} from "../utils/handleApi";

function TodoPage() {
    const [todo,setTodo]=useState([])
    const [text,setText]=useState("")
    const [isUpdating,setIsUpdating]=useState(false)
    const [todoId,setTodoId]=useState("")

  useEffect(()=>{
    getAllTodo(setTodo)
  },[])

  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="App bg-gray-100 min-h-screen py-8">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">WhatToDo App</h1>
    <div className="flex items-center justify-between mb-6">
      <input 
        className="w-full bg-white border border-gray-300 rounded py-3 px-4 focus:outline-none focus:border-blue-500 shadow-md" 
        type="text" 
        placeholder="Add Todos..." 
        value={text} 
        onChange={(event) => setText(event.target.value)} 
      />
      <button 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none shadow-md transition duration-300"
        onClick={isUpdating ? () => updateTodo(todoId, text, setTodo, setText, setIsUpdating) : () => addTodo(text, setText, setTodo)}
      >
        {isUpdating ? "Update" : "Add"}
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {todo.map((item) => (
        <Todo 
          key={item._id} 
          text={item.text} 
          updateMode={() => updateMode(item._id, item.text)} 
          deleteTodo={() => deleteTodo(item._id, setTodo)} 
        />
      ))}
    </div>
  </div>
</div>

  )
}

export default TodoPage