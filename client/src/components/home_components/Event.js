import React ,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';



function Event() {
  const {id} =useParams();
  console.log(id);
  const [singleevent,setsingleEvent] =useState({});
    useEffect(() =>{
        fetch(`http://localhost:8000/singleevent/${id}`, {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data, "userData")
            setsingleEvent(data.data)
        })
        
    },[id]);
    
  
  return (
    <div className='single-event-page-layout'>
        <div className='single-event-card-container'>
            <div className='single-event-car-poster'>
              {console.log(singleevent.imagepath)}
              <img className='events-card-logo'
              src={`http://localhost:9000/eventsposters/${singleevent.imagepath}`}
              alt={singleevent.name}
              style={{ maxWidth: '200px' }}/>
            </div>
            <div className='single-event-page-content'>
                <p>Name: {singleevent.name} </p>
                <p>Event Description: {singleevent.description} </p>
                <p>Conducted By club: </p>
                <p>Date: {singleevent.date} </p>
                <p>Time: {singleevent.time}</p>
                <p>Venue: {singleevent.venue}</p>
            </div>
            {/* <button  style={{width:"200px",marginLeft:"200px",marginBottom:"40px"}}>Set Reminder</button> */}
        </div>
        
    </div>
  )
}

export default Event