import React, { useEffect,useState } from 'react'
import PostList from './PostList'
import ModelsState from './ModelsState'
// import ModelsState from './ModelsState'
const Post = () => {
    const [post,setPost]=useState([])

    const {post1,isWaiting,handleRemove}=ModelsState("http://localhost:3000/users")

    useEffect(()=>{
      setPost(post1)
      console.log("state")
    })
  return (
    <>
        {isWaiting&& <h3>waiting loading data from server</h3>}
  
               {post && <PostList posts={post}  handleRemove={handleRemove}/>}
         
        </>
  )
}

export default Post
