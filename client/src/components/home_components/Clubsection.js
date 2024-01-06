import React from 'react'
import { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import logo from './Clubs-images/mid image.jpeg'


function Clubsection() {
  return (
    <div className='club-section'>
        <h3 className='club-section-heading'>CLUBS</h3>
        <Link className='club-section-more button' to="/clubs"><span className='more-button'>More</span></Link>
        <div className='scroll-wrapper'>
          <div className='scroll-tracker'>
            <div className='club-card'>
              <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card'>
            <img className="club-card-logo" src={logo}/>
            </div>
            </div>
            </div>
          <div className='scroll-wrapper2'>
          <div className='scroll-tracker2'>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            <div className='club-card2'>
            <img className="club-card-logo" src={logo}/>
            </div>
            </div>
          </div>
          
    </div>
  )
}

export default Clubsection