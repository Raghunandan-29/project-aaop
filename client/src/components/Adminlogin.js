import React,{useState,useContext} from 'react'
import axios from 'axios';
import {store} from '../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as Components from './Stylescomponent';
import '../App.css';

function Adminlogin() {
    const [signIn] = React.useState(true);
    const navigate = useNavigate();
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/adminlogin',data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
        navigate('/admin');
    }
  return (
    <div className='Adminlogin'>
        <Components.Container>
        <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={submitHandler}autoComplete="off">
                       <Components.Title>
                        {/* Student
                        <div className='verticalLine'></div>
                        <Link style={{textDecoration:"none",color:"#000000"}} to={"/admin"}>Admin </Link> */}
                            Admin Login
                        </Components.Title>
                       
                       <Components.Input onChange={changeHandler} name="email" type='email' placeholder='Email' />
                       <Components.Input onChange={changeHandler} name="password" type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button >Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>
            </Components.Container>
    </div>
  )
}

export default Adminlogin