import React,{useState,useContext} from 'react'
import axios from 'axios';
import {store} from '../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as Components from './Stylescomponent';
import '../App.css';

const Login = () => {
    //Sign in
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
        axios.post('http://localhost:8000/login',data).then(
            
            res => setToken(res.data.token)
           
        )
        // const jwtToken = data.token;
        // localStorage.setItem('token', jwtToken);
    }
    if(token){
        localStorage.setItem('token',token)
        navigate('/home');
    }
    
    return (
        <div className='loginbody'>
              {/* <form onSubmit={submitHandler} autocomplete="off">
                <h3>Login</h3>
                <input type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
                <input type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                <input type="submit" value="Login" /><br />
            </form> */}

            <Components.Container>
              {/* <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form autoComplete="off">
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input  name="username" type='text' placeholder='Name' />
                      <Components.Input  name="email" type='email' placeholder='Email' />
                      <Components.Input  name="password" type='password' placeholder='Password' />
                      <Components.Input  name="confirmpassword" type='password' placeholder='Confrim password' />
                      <Components.Button>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer> */}

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={submitHandler}autoComplete="off">
                       <Components.Title>
                        Student
                        <div className='verticalLine'></div>
                        <Link style={{textDecoration:"none",color:"#000000"}} to={"/admin"}>Admin </Link>
                        </Components.Title>
                       
                       <Components.Input onChange={changeHandler} name="email" type='email' placeholder='Email' />
                       <Components.Input onChange={changeHandler} name="password" type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button >Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  {/* <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel> */}

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Link to={'/register'}>
                            <Components.GhostButton>
                                Sigin Up
                            </Components.GhostButton> 
                        </Link>
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
        </div>
    )
}

export default Login
