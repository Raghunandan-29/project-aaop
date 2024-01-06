import React from 'react'
import Text_box from './College_info_components/Text_box'
import {Fade} from 'react-awesome-reveal'

function Collegeinfo() {
  return (
    <div className="container">
      <Fade direction='up'><h1 className='Container-topHeading'>More About NiTW</h1></Fade>
         <Text_box /> 
    </div>
  )
}

export default Collegeinfo