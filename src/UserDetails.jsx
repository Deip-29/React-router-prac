import React from 'react'
import { Link, useParams } from 'react-router'

const UserDetails = () => {
  const {id,name}=useParams();
  // console.log(id)
  // console.log(name)
  
  return (
    <div>
      
      <h1>user Details</h1>
      <h2>Users ID is :{id}</h2>
      <h2>Users name is :{name}</h2>
      <Link to="/userList ">Back</Link>
    </div>
  )
}

export default UserDetails
