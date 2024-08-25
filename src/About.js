import React, { useEffect, useState } from 'react'

const About = () => {
    const [counter,setCounter]=useState(0)
    const [auth,setAuth]=useState(false)
    const [isVisible,setIsvisible]=useState(true)
    // useEffect(()=>{
    //     console.log("load")
    // })

    // useEffect(()=>{
    //     console.log("load")
    // },[])

    useEffect(()=>{
        console.log("load")
    },[counter])

    useEffect(()=>{
        console.log(isVisible)
    },[auth,isVisible])
    const handleonadd=()=>{
        setCounter(c=>c+1) 
}
    const handleonminus=()=>{
        if(counter>0)
        setCounter(c=>c-1) 
    }
    const handlenauthlogin=()=>{
        // setAuth(true)
        setIsvisible(false)


    }
    const handlenauthlogout=()=>{
        // setAuth(false)
        setIsvisible(true)

    }
  return (
    <div>
      <button onClick={()=>{handleonadd()}}>+</button>
      <button onClick={handleonminus}>-</button>
    { isVisible && <button onClick={handlenauthlogin}>login</button>
}
      {!isVisible &&<button onClick={handlenauthlogout}>logout</button>}

      <h1>{counter}</h1>
      <h2>{auth}</h2>


    </div>
  )
}

export default About
