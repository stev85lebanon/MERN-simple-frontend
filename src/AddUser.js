import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddUser = () => {
    const navigator=useNavigate()
    const [isWaiting,setIswaitnig]=useState(false)

    const [user,setUser]=useState({
        name:"",
        age:"",
        department:""
    })
  
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(user)
        setIswaitnig(true)
        setTimeout(()=>{
            axios.post("http://localhost:3000/users",user)
        .then(()=>{alert("added successfuly")})
        setUser({
            name:"",
            department:"",
            age:""
        })
        // navigator("/post")
        setIswaitnig(false)
        },2000)
    }}>
    

<div className="input-group input-group-lg">
  <span className="input-group-text" id="inputGroup-sizing-lg">Name</span>
  <input required type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={user.name}  onChange={(e)=>{setUser({...user,name:e.target.value})}}/>
</div>
<div className="input-group input-group-lg">
  <span className="input-group-text" id="inputGroup-sizing-lg">Department</span>
  <input required type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={user.department}  onChange={(event)=>{setUser({...user,department:event.target.value})}}/>
</div><div className="input-group input-group-lg">
  <span className="input-group-text" id="inputGroup-sizing-lg">Age</span>
  <input required type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={user.age}  onChange={(event)=>{setUser({...user,age:event.target.value})}}/>
</div>
{!isWaiting&&      <button className='container btn btn-primary' style={{display:"flex",justifyContent:"center"}}>Create</button>}
{ isWaiting&&   <button className='container btn btn-primary' disabled style={{display:"flex",justifyContent:"center"}}>Please wait....</button>}
    </form>
  )
}

export default AddUser
