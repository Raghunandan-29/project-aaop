import React,{useState,useEffect} from 'react'
import logo from './Clubs-images/mid image.jpeg'

function Clubs() {
  const [clubs, setClubs] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:9000/clubs', {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data, "userData")
            setClubs(data.data)
        })
    },[]);
  return (
    <div className='clubs-page-layout'>
      <h2 className='clubs-page-heading'>CLUBS</h2>
      <div className='clubs-page-container'>
       { clubs.map(club =>{
        return(
            <div className='clubs-page-card-container'>
            <div className='clubs-page-card-layout'>
              <img style={{objectFit:"cover",width:'200px',height:'200px'}} src= {logo}/>
            </div>
            <div className='clubs-page-card-content'>{club.name}</div>    
          </div>
        )
       })
        
      }
        {/* <div className='clubs-page-card-container'>
          <div className='clubs-page-card-layout'></div>
          <div className='clubs-page-card-content'>Club name</div>    
        </div>
        <div className='clubs-page-card-container'>
          <div className='clubs-page-card-layout'></div>
          <div className='clubs-page-card-content'>Club name</div>    
        </div>
        <div className='clubs-page-card-container'>
          <div className='clubs-page-card-layout'></div>
          <div className='clubs-page-card-content'>Club name</div>    
        </div>
        <div className='clubs-page-card-container'>
          <div className='clubs-page-card-layout'></div>
          <div className='clubs-page-card-content'>Club name</div>    
        </div> */}
       
      </div>

    </div>
  )
}

export default Clubs