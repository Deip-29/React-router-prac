import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => {
  return (
    <div>
      PageNotFound
   <h2>   404 ERROR</h2>  
   <Link to="/">Go To Home Page</Link>    
   <img style={{width:'70%'}} src="https://www.shutterstock.com/image-vector/flat-design-404-error-page-260nw-2489201787.jpg"/>
    </div>
  )
}

export default PageNotFound
