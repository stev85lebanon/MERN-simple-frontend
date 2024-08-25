import { useState,useEffect } from 'react'
import axios from 'axios'

 const ModelsState = (url) => {
    const [post1,setPost1]=useState([])
    const [isWaiting,setIswaiting]=useState(true)

    const handleRemove=(id)=>{
      axios.delete("http://localhost:3000/users/"+id)
      .then(()=>alert("data deleted successfully"))
  }

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(json=>{
           setTimeout(() => {
            setPost1(json)
            // console.log(json)
            setIswaiting(false)
        },2000)
        })},[url])
  return (
    {post1,isWaiting,handleRemove}
  )
}
export default ModelsState
