import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const PostInfo = () => {
  const {id}=useParams()
  const [postDetails,setPostDetails]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/users/"+id)
    .then(response=>response.json())
    .then(data=>{
      setPostDetails(data)
      // console.log(data)
    }
    )
  },[])
  return (
    <div>
  <div className="card container" >
  <div className="card-body">
    <h5 className="card-title"><b>Name :</b> {postDetails.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary"><b>Age :</b>{postDetails.age}</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary"><b>Department :</b>{postDetails.department}</h6>

    <p className="card-text"><b>Id :</b> {postDetails._id}</p>
    <p className="card-text"><b>Date :</b> {postDetails.date}</p>

   <button className='btn btn-danger'><Link to={"/update/"+postDetails._id} className="card-link">Edit</Link></button> 
    <a href="#" className="card-link">Another link</a>
  </div>
</div>


</div>
  )
}

export default PostInfo
