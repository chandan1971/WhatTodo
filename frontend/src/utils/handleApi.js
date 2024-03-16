import axios from "axios"
// import { useSelector } from "react-redux";

const baseURL="http://localhost:8000"

const getAllTodo=async(setTodo)=>{
    const res=await fetch(`${baseURL}/`,{
        method:'GET',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':`${baseURL}`,
            'Access-Control-Allow-Credentials':'false',
            'Accept':'application/json'
        },
        credentials:'include'
    })
    const data=await res.json();
    if(res.ok){
        console.log(data);
        setTodo(data);
    }
    // axios
    // .get(baseURL)
    // .then(({data})=>{
    //     console.log(`data---->${data}`);
    //     setTodo(data)
    // })
}

const addTodo=async (text,setText,setTodo)=>{
    // const {currentUser,loading}=useSelector(state=>state.user)
    const res=await fetch(`${baseURL}/save`,{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':`${baseURL}`,
            'Access-Control-Allow-Credentials':'false',
            'Accept':'application/json, text/plain, */*'
        },
        body: JSON.stringify({text}),
        credentials:'include',
    })
    console.log(res);
    const data=await res.json();
    if(res.ok){
        console.log(data);
        setText("");
        getAllTodo(setTodo);
    }
    // axios
    // .post(`${baseURL}/save`,{text})
    // .then((data)=>{
    //     console.log(data);
    //     setText("")
    //     getAllTodo(setTodo)
    // })
}


const updateTodo=(todoId,text,setTodo,setText,setIsUpdating)=>{
    axios
    .post(`${baseURL}/update`,{_id:todoId,text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllTodo(setTodo)
        setIsUpdating(false)
    })
}

const deleteTodo=(_id,setTodo)=>{
    axios
    .post(`${baseURL}/delete`,{_id})
    .then((data)=>{
        getAllTodo(setTodo)
    })
}


export {getAllTodo,addTodo,updateTodo,deleteTodo}