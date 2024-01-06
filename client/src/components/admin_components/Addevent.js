import React,{useState} from 'react';
import axios from 'axios';


function Addevent() {
    const [eventData,seteventData] = useState({
        name:'',
        date:'',
        description:'',
        time:'',
        venue:'',
        image:'',
    })
    const handleImageChange = (e) => {
        // seteventData(e.target.files[0]);
        const imageFile = e.target.files[0];
        seteventData((prevState) => ({
            ...prevState,
            image: imageFile,
          }));
      };
    const signupChangeHandler = e =>{
        seteventData({...eventData,[e.target.name]:e.target.value})
    }
    const signupSubmitHandler = e =>{
        e.preventDefault();
        const formData = new FormData();
            formData.append('name', eventData.name);
            formData.append('description', eventData.description);
            formData.append('date', eventData.date);
            formData.append('time', eventData.time);
            formData.append('venue', eventData.venue);
            formData.append('image', eventData.image);
        axios.post('http://localhost:8000/addevent',formData).then(
            res => {alert(res.data); seteventData({
                name:'',
                date:'',
                time:'',
                description:'',
                venue:'',
                image:'',
            })}
        )

    }
  return (
    <div className='Add-event-form-layout'>
        <div className='Add-event-form-container'>
            <form className='Add-event-form' onSubmit={signupSubmitHandler} autoComplete="off">
                <div>
                    <label>Poster</label><br />
                    <input type='file' accept="image/*"  name='image' onChange={handleImageChange}/>
                </div>
                
                <div>
                    <label>Name of the event</label><br />
                    <input type='text' name='name' value={eventData.name} onChange={signupChangeHandler}/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea type='text'value={eventData.description} name='description'onChange={signupChangeHandler} />
                </div>
                <div>
                    <label>Date</label>
                    <input type='text'  value={eventData.date} name='date' onChange={signupChangeHandler} />
                </div>
                <div>
                    <label>Time</label>
                    <input type='text' value={eventData.time} name='time' onChange={signupChangeHandler} />
                </div>
                <div>
                    <label>Venue</label>
                    <input type='text'  value={eventData.venue} name='venue' onChange={signupChangeHandler} />
                </div>
                <button style={{width:"100px"}}>Submit</button>
            </form>

        </div>

    </div>
  )
}

export default Addevent