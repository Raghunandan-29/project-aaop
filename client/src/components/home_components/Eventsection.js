import React from 'react'
import Eventcard from './Events/Eventcard'
import { Link } from 'react-router-dom'

function Eventsection() {
  return (
    <div className='Events-section'>
      <h2 className='Events-section-heading'>Events</h2>
      <Link to={"/events"}><button className='Events-section-more-button'>More</button></Link>
        <Eventcard />
    </div>
  )
}

export default Eventsection