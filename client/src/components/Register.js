import React,{useState} from 'react'
import axios from 'axios';
import * as Components from './Stylescomponent';
import { Link } from 'react-router-dom';

const Register = () => {
    const [signIn] = React.useState(false);
    const [signupData,setsignupData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const signupChangeHandler = e =>{
        setsignupData({...signupData,[e.target.name]:e.target.value})
    }
    const signupSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:9000/register',signupData).then(
            res => {alert(res.data);setsignupData({
                username:'',
                email:'',
                password:'',
                confirmpassword:''
            })}
        )

    }
    return (
        <div>
            <center>
            
            {/* <form onSubmit={signupSubmitHandler} autocomplete="off">
                <h3>Register</h3>
                <input type="text" onChange={signupChangeHandler} name="username" placeholder="User Name" /><br />
                <input type="email" onChange={signupChangeHandler} name="email" placeholder="Email" /><br />
                <input type="password" onChange={signupChangeHandler} name="password" placeholder="Password" /><br />
                <input type="password" onChange={signupChangeHandler} name="confirmpassword" placeholder="Confirm Password" /><br />
                <input type="submit" value="Register" /><br />
            </form> */}
            
            <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form onSubmit={signupSubmitHandler} autoComplete="off">
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input onChange={signupChangeHandler} name="username" type='text' placeholder='Name' />
                      <Components.Input onChange={signupChangeHandler} name="email" type='email' placeholder='Email' />
                      <Components.Input onChange={signupChangeHandler} name="password" type='password' placeholder='Password' />
                      <Components.Input onChange={signupChangeHandler} name="confirmpassword" type='password' placeholder='Confrim password' />
                      <Components.Button>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              {/* <Components.SignInContainer signinIn={signIn}>
                   <Components.Form onSubmit={submitHandler}autoComplete="off">
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input onChange={changeHandler} name="email" type='email' placeholder='Email' />
                       <Components.Input onChange={changeHandler} name="password" type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button >Sigin In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer> */}

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Link to={"/login"}>
                      <Components.GhostButton >
                          Sign In
                      </Components.GhostButton>
                      </Link>
                      </Components.LeftOverlayPanel>

                      {/* <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Link to={'/register'}>
                            <Components.GhostButton>
                                Sigin Up
                            </Components.GhostButton> 
                        </Link>
                      </Components.RightOverlayPanel> */}
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
        </center>
        </div>
    )
}

export default Register
