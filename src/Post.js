import React, { useEffect,useState } from 'react'
import PostList from './PostList'
import axios from 'axios'
// import ModelsState from './ModelsState'
const Post = () => {
    const [post,setPost]=useState([])
    const [isWaiting,setIswaiting]=useState(true)

    // const {post1,isWaiting}=ModelsState("http://localhost:3000/users")

    const handleRemove=(id)=>{
        axios.delete("http://localhost:3000/users/"+id)
        .then(()=>alert("data deleted successfully"))
    }
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(response=>response.json())
        .then(data=>{
           setTimeout(() => {
            setPost(data)
            // console.log(json)
            setIswaiting(false)
        },2000)
        },[post])})
  return (
    <>
        {isWaiting&& <h3>waiting loading data from server</h3>}
  
               {post && <PostList posts={post}  handleRemove={handleRemove}/>}
         
        </>
  )
}

export default Post
