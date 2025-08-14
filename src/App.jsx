import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'
import Home from './Home'
import { Link, Navigate, NavLink, Route, Routes } from 'react-router'
import Navbar from './Navbar'
import Login from './Login'
import PageNotFound from './PageNotFound'
import College from './College'
import Student from './Student'
import Department from './Department'
import Details from './Details'
import UserList from './UserList'
import UserDetails from './UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <Routes> 
   <Route  element={<Navbar/>}> 
       <Route path="about" element={<About/>}/>
       <Route path="/" element={<Home/>}/>
       <Route path="/user/login" element={<Login/>}/>
       {/* <Route path="/userList/" element={<UserList/>}/> */}
       <Route path="/userList/list?" element={<UserList/>}/>
        <Route path='/userList/:id/:name?' element={<UserDetails/>}/>
        {/* <Route path='/userList/:id' element={<UserDetails/>}/> */}
   </Route>
       <Route path="/college" element={<College/>}>
      
       <Route index element={<Student/>}/>
       <Route path="Departments" element={<Department/>}/>
       <Route path="Details" element={<Details/>}/>
         
       </Route>

       <Route path="/*" element={<PageNotFound/>}/>
       {/* <Route path="/*" element={<Navigate to="/login"/>}/> */}
    </Routes>
    </>
  )
}

export default App
