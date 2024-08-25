import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({posts,handleRemove}) => {
const handlemap=posts.map(({_id,name}) => {
    return (
        <tr key={_id}>
            <td style={{width:400}}>{name}</td>
            <td><button className='btn btn-danger' onClick={()=>{handleRemove(_id)}}>Remove</button></td>
            <td><button className='btn btn-success'><Link to={"/post/"+_id} style={{color:"white"}}>More</Link></button></td>
            <td><button className='btn btn-primary'><Link to={"/update/"+_id} style={{color:"white"}}>Edit</Link></button></td>

        </tr>
    )
})
    return (

        <div className='container'>
            <table  style={{backgroundColor:"gray"}}>
                <thead>
                    <tr>
                        {/* <th>Name</th> */}
                        {/* <th>Edit</th> */}
                    </tr>
                </thead>
                <tbody>
                    {handlemap}
                </tbody>
            </table>
        </div>

    )
}

export default PostList
