import React,{useContext,useState,useEffect} from 'react'
import {store} from '../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Collegeinfo from './home_components/College-info';
import Mainsection from './home_components/Mainsection';
import Eventsection from './home_components/Eventsection';
import Clubsection from './home_components/Clubsection';


const Myprofile = () => {
    const navigate = useNavigate();
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:8000/home',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))

    },[])
    if(!token){
        navigate('/login');
    }
    return (
        <div >
            {
                data &&
                <div>
                    {/* <h1>Welcome</h1> */}
                    <Mainsection />
                    <Collegeinfo />
                    <Eventsection />
                    <Clubsection />
                    
                </div> }
             
                {/* <Mainsection />
                    <Collegeinfo />
                    <Eventsection />
                    <Clubsection /> */}
        </div>
    )
}

export default Myprofile
