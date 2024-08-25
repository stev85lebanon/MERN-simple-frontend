import React from 'react'
import { BrowserRouter, Link ,Route,Routes} from 'react-router-dom'
import Post from './Post'
import About from './About'
import AddUser from './AddUser'
import PostInfo from './PostInfo'
import Login from './Login'
import Update from './Update'
const Navbar=()=> {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg bg-body-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/post" className="nav-link active" >Posts</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link" >Add</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link" >Login</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
    </nav>
    <Routes>
      <Route path="/post" element={<Post/>}></Route>
      <Route path="/post/:id" element={<PostInfo/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/add" element={<AddUser/>}></Route>
      <Route path="/update/:id" element={<Update/>}></Route>

    </Routes>
    </BrowserRouter>
    
  )
}

export default Navbar
