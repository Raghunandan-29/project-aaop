import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {BsCalendarEvent} from 'react-icons/bs'
// import {BsCalendarCheck} from 'react-icons/bs'
import {BsChevronLeft} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


function Eventcard(event) {
    const navigate = useNavigate();
    const Morehandle= (id)=>{
        navigate(`event/${id}`);
        console.log(id);
        axios.get(`/singleevent/${id}`)
        // .then((response) => {
        //     // Handle the response from the backend here
        //     console.log("id is sent");
        //   })
        //   .catch((error) => {
        //     // Handle errors if any
        //     console.error(error);
        //   });

    }
    
      
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
        
        // axios.get('http://localhost:9000/events')
        // .then(events => setEvents(events))
        // .catch(err => console.log(err))
    },[]);
    // console.log(typeof(events));
  // const settings = {
  //   dots: false,
  //   // className: "center",
  //   // centerMode: true,
  //   // // infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   speed: 500
  // };
  const scrollLeft = () =>{
    console.log("clicked");
    var slides = document.getElementById('slides');
    slides.scrollLeft =slides.scrollLeft - 700;
  }
  const scrollRight = () =>{
    console.log("clicked");
    var slides = document.getElementById('slides');
    slides.scrollLeft =slides.scrollLeft + 700;
  }
  return (
    <div className='Events-card-layout'>
      <BsChevronLeft className='left-arrow' onClick={scrollLeft} />
      <div id= "slides" className='slider'>
        {
            events.map(event =>{
                return(
                    <div key={event.id} className='Events-card-container'>
                        <div className='Events-club-logo'>
                            {event.imagepath && (
                                <img className='events-card-logo'
                                src={`http://localhost:9000/eventsposters/${event.imagepath}`}
                                alt={event.name}
                                style={{ maxWidth: '200px' }}
                                />
                            )}
                        </div>
                        <div className='Events-card-content'>
                            <div className='Events-card-sub-content'>
                                <h4>{event.name}</h4>
                                {/* <p>{event._id}</p> */}
                                <Link to={`event/${event._id}`}><button onClick={()=>Morehandle(event._id)}>More</button></Link>
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
        
        {/* <div className='Events-card-container'>
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
        <div className='Events-card-container'>
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
        <div className='Events-card-container'>
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
        <div className='Events-card-container'>
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
        <div className='Events-card-container'>
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
        </div> */}
      </div>
      <BsChevronRight className='right-arrow' onClick={scrollRight} />
         {/* <Slider {...settings}>
          
          <div className='Events-card-container'>
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
          <div className='Events-card-container'>
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
          <div className='Events-card-container'>
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
          <div className='Events-card-container'>
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
          <div className='Events-card-container'>
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

          
        </Slider>  */}
        </div>
  )
}

export default Eventcard