import React from 'react'
import { Link } from 'react-router'

const UserList = () => {
  const userData=[
    {id:1,name:'Anil'},
    {id:2,name:'Amit'},
    {id:3,name:'Somu'},
    {id:4,name:'Sonu'},
    {id:5,name:'Munni'},
    {id:6,name:'Bitto'},
  ]
  return (
    <div style={{marginLeft:20}}>
      <h1>User List</h1>
      {
        userData.map((item)=>(
          <div>
            <h4><Link to={"/userList/"+ item.id+"/"+item.name}>{item.name}</Link></h4>
            {/* <h4><Link to={"/userList/"+item.name}>{item.id}</Link></h4> */}
            </div>
        ))
      }
    </div>
  )
}

export default UserList
