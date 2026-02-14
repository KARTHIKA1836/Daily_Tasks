import React from 'react'
import { useState } from 'react';
import "../style/login.css"
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
   const navigate=useNavigate();
  
  return (
    <div> 
      <div className='login-container'>
      <h1>Login Page</h1>
      <div>
      <h3>UserName :</h3>
    <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
    </div>
    <div>
    <h3>Password :</h3>
    <input type="password" placeholder="password"value ={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div>
      <button type="submit" onClick={()=>navigate("/home")}>Login</button>
    <br/>
     <br/>
    Don't have an account?<br/>
    <button type="submit" onClick={()=>navigate("/signup")}>Signup</button>
    </div>
    </div>

    </div>
  )
}

export default Login
