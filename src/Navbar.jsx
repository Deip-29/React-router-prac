import React from 'react'
import { Link, Outlet } from 'react-router'
import './header.css'
const Navbar = () => {
  return (
  <div>
  <div className='header'>

    <div>
      <Link className='link' to='/'><h2>LOGO</h2></Link>
    </div>
    <div>
    <ul>
      <li>
        <Link className='link' to="/" >Home</Link>
      </li>
      <li>
        <Link className='link' to="/about" >About</Link>
      </li>
      <li>
        <Link className='link' to="/user/login" >Login</Link>
      </li>
      <li>
        <Link className='link' to="/college" >College</Link>
      </li>
      <li>
        <Link className='link' to="/userList" >Users</Link>
      </li>
      <li>
        <Link className='link' to="/userList/list" >List</Link>
        
      </li>
    </ul>
    </div>
  </div>

  <Outlet/>
  </div>)
}

export default Navbar
