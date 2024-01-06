import React from 'react'
import { BsSearch } from "react-icons/bs";
import {CgProfile} from "react-icons/cg"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Nav-div'>
      <div className='logo-div'>
          <img src='' alt=''></img>
      </div>
      <div className='Nav-components'>
            <ul>
              <li className='Nav-components-items'><a href="/">Home</a></li>
              <li className='Nav-components-items'><a href="/">Events</a></li>
              <li className='Nav-components-items'><a href="/">Clubs</a></li>
            </ul>
      </div>
      {/* <div className='Nav-btns'>
        <div className='icon'>
          <BsSearch />
        </div>
         <div className='icon'>
          <Link to={`/profile`}><CgProfile /></Link>
        </div> 
          
      </div> */}
      
    </div>
  )
}

export default Navbar