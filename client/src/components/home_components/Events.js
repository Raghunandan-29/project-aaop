import React ,{useState, useEffect} from 'react'
// import {BsSearch} from 'react-icons/bs'
import {BsCalendarEvent} from 'react-icons/bs'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Events() {
    const [query, setQuery] = useState('');
    const [events, setEvents] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:8000/events', {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data, "userData")
            setEvents(data.data)
        })
    },[]);
    const handleSearchChange = (e) => {
        setQuery(e.target.value);
      };
    //   const fetchEvents = async () => {
    //     try {
    //       const response = await axios.get('/events', {
    //         // params: { search: searchTerm },
    //       });
    //       setEvents(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
      
  return (
    <div>
      <div className='events-page-container'>
        <div className='events-page-top-section'>
            <h2 className='events-page-heading'>Events</h2>
            <input className='searchbar' type='text' name='search' placeholder='Search ...' value={query}
                onChange={handleSearchChange} autoComplete='off'/>
            {/* <BsSearch size={25}  className='events-page-search-button' />
             */}
        </div>
        <div className='events-page-card-container'>
        {
            events.filter((event)=>
            event.name.toLowerCase().includes(query)||
            event.date.toLowerCase().includes(query)||
            event.time.toLowerCase().includes(query)
            )
            .map(event =>{
                return(
                    <div className='Events-card-container'>
                        <div className='Events-club-logo'>
                            {event.imagepath && (
                                <img
                                src={`http://localhost:9000/eventsposters/${event.imagepath}`}
                                // src={`http://localhost:5000/EventsPosters/${event.imagepath}`}
                                alt={event.name}
                                style={{ maxWidth: '200px' }}
                                />
                            )}
                        </div>
                        <div className='Events-card-content'>
                            <div className='Events-card-sub-content'>
                                <h4>{event.name}</h4>
                                <Link to={`event/${event._id}`}><button>More</button></Link>
                            </div>
                            <div className='Events-card-sub-content'>
                                <p>{event.date} {event.time} {event.venue}</p>
                                <BsCalendarEvent  style={{color:"green"}}/>
                            </div>
                            
                        </div>
                    </div>
                )
            })
        }



{/* 
          <div className='events-page-card-layout'>
          <div className='Events-club-logo'></div>
              <div className='Events-card-content'>
                  <div className='Events-card-sub-content'>
                      <h4>Event name</h4>
                      <button>More</button>
                  </div>
                  <div className='Events-card-sub-content'>
                      <p>Time and Venue</p>
                      <BsCalendarEvent  style={{color:"green"}}/>
                  </div>
                  
              </div>
          </div>
          <div className='events-page-card-layout'>
          <div className='Events-club-logo'></div>
              <div className='Events-card-content'>
                  <div className='Events-card-sub-content'>
                      <h4>Event name</h4>
                      <button>More</button>
                  </div>
                  <div className='Events-card-sub-content'>
                      <p>Time and Venue</p>
                      <BsCalendarEvent  style={{color:"green"}}/>
                  </div>
                  
              </div>
          </div>
          <div className='events-page-card-layout'>
          <div className='Events-club-logo'></div>
              <div className='Events-card-content'>
                  <div className='Events-card-sub-content'>
                      <h4>Event name</h4>
                      <button>More</button>
                  </div>
                  <div className='Events-card-sub-content'>
                      <p>Time and Venue</p>
                      <BsCalendarEvent  style={{color:"green"}}/>
                  </div>
                  
              </div>
          </div>
          <div className='events-page-card-layout'>
          <div className='Events-club-logo'></div>
              <div className='Events-card-content'>
                  <div className='Events-card-sub-content'>
                      <h4>Event name</h4>
                      <button>More</button>
                  </div>
                  <div className='Events-card-sub-content'>
                      <p>Time and Venue</p>
                      <BsCalendarEvent  style={{color:"green"}}/>
                  </div>
                  
              </div>
          </div>
          <div className='events-page-card-layout'>
          <div className='Events-club-logo'></div>
              <div className='Events-card-content'>
                  <div className='Events-card-sub-content'>
                      <h4>Event name</h4>
                      <button>More</button>
                  </div>
                  <div className='Events-card-sub-content'>
                      <p>Time and Venue</p>
                      <BsCalendarEvent  style={{color:"green"}}/>
                  </div>
                  
              </div>
          </div>
          <div className='events-page-card-layout'>
          <div className='Events-club-logo'></div>
              <div className='Events-card-content'>
                  <div className='Events-card-sub-content'>
                      <h4>Event name</h4>
                      <button>More</button>
                  </div>
                  <div className='Events-card-sub-content'>
                      <p>Time and Venue</p>
                      <BsCalendarEvent  style={{color:"green"}}/>
                  </div>
                  
              </div>
          </div>
           */}
          
         

        </div>
          
      </div>
    </div>
  )
}

export default Events