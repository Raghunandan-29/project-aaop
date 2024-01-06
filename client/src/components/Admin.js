import React,{useContext,useState,useEffect} from 'react'
import {store} from '../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Admintopsection from './admin_components/Admintopsection';
import Adminmiddlesection from './admin_components/Adminmiddlesection';

function Admin() {
    const navigate = useNavigate();
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:8000/admin',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))

    },[])
    if(!token){
        navigate('/adminlogin');
    }
  return (
    <div>{
            data &&
            <div>
                <Admintopsection />
                <Adminmiddlesection />
            </div>
            
            // <div>Admin</div>
        }
        {/* <Admintopsection />
        <Adminmiddlesection /> */}
        
    </div>
  )
}

export default Admin