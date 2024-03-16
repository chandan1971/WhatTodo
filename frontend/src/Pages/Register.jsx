import React, { useState } from 'react';
import { Alert, Button, Label, Spinner, TextInput} from 'flowbite-react';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const baseURL="http://localhost:8000";


function Register() {
    const [formData,setFormData]=useState({});
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value.trim()})
    }
    const [loading,setLoading]=useState(false);
    const [erroMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();
    const handleSubmit=async (e)=>{
      e.preventDefault();
      if(!formData.username || !formData.email || !formData.password){
        return setErrorMessage(`Please Fillout All Fields`)
      }
      try {
        setLoading(true);
        setErrorMessage(null);
        const res=await fetch(`${baseURL}/register`,{
          method:'POST',
          mode:'cors',
          headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':`${baseURL}`,
            'Access-Control-Allow-Credentials':'false',
            'Accept':'application/json'
          },
          body:JSON.stringify(formData),
          credentials:'include',
        })
        const data=await res.json();
        setLoading(false);
        if(res.ok===true){
          console.log('Reached here');
          navigate('/login')
        }
        else{
          setErrorMessage("Signup Failed");
        }
        
      } 
      catch (err) {
        setLoading(false);
      }
      
    }
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
  <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96' onSubmit={handleSubmit}>
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='name'>
        Your Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="string" placeholder="john_Doe" onChange={handleChange} />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Your Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="name@company.com" onChange={handleChange} />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Your Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" onChange={handleChange} />
    </div>
    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={loading}>
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120 12h-4a3.999 3.999 0 00-3.858-3.995L10 8.171V4h-4l.002 3.975A8.004 8.004 0 014 12h4c0-2.64 1.28-4.988 3.249-6.432l1.518-1.012A9.956 9.956 0 0012 2C6.486 2 2 6.486 2 12h4c0-.547.045-1.087.133-1.619l1.578 1.052z"></path>
          </svg>
          Loading...
        </>
      ) : 'Register'}
    </button>
    <div className='flex items-center mt-4'>
      <span className='text-sm'>Already Have an Account ?</span>
      <Link to={'/login'} className='text-blue-500 ml-1'>Login</Link>
    </div>
    {erroMessage && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
        <span className="block sm:inline">{erroMessage}</span>
      </div>
    )}
  </form>
</div>

  )
}

export default Register