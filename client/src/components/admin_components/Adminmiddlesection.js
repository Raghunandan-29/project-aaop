import React from 'react'
import { Link } from 'react-router-dom'

function Adminmiddlesection() {
  return (
    <div className='Admin-middle-section'>
        <Link style={{textDecoration:"none"}} to={"/addstudent"}><div className='Admin-middle-section-button'>Add Student</div></Link>
        <Link style={{textDecoration:"none"}} to={"/addevent"}><div className='Admin-middle-section-button'> Add Event</div></Link>
    </div>
  )
}

export default Adminmiddlesection