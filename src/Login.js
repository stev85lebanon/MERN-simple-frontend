import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigator=useNavigate()
    const [user,setUser]=useState({
        username:"",
        password:""
    })
    useEffect(()=>{
       
    })
  return (
  <form onSubmit={(e)=>{
e.preventDefault()
console.log(user)
if(user.username=="mustafa"&& user.password=="1234"){
    navigator("/post")
            }else{
                alert("wrong username or password")
            }
            setUser({
                username:"",
                password:""
              })
  }
 
  }>
      <div>
      <label>Username</label>
      <input type='text' value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
    </div>
    <br/>
     <div>
     <label>Password</label>
     <input type='password' value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
   </div>
   <button type='submit'>Send</button>
  </form>
  )
}

export default Login
