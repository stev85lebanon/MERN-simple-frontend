import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const [user,setUser]=useState({
        name:"",
            department:"",
            age:""
    })
    const [isWaiting,setIswaitnig]=useState(false)
   const navigator=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
    //     fetch("http://localhost:3000/users/"+id)
    //     .then(res=>res.json())
    //     .then((data)=>
    //         // console.log(data)
    //     setUser(data)
    // )
    axios.get("http://localhost:3000/users/"+id)
    .then((res)=>{
setUser(res.data)
    })
    },[])
  return (
    <div>
<form onSubmit={(e)=>{
        e.preventDefault()
        // console.log(user)
        setIswaitnig(true)
        setTimeout(()=>{
            axios.patch("http://localhost:3000/users/"+id,user)
        .then(()=>{alert("updated successfuly")})
        // setUser({
        //     name:"",
        //     department:"",
        //     age:""
        // })
        navigator("/post")
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
    </form>    </div>
  )
}

export default Update
