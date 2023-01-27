import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from './features/UserContext';

const Login = () => {

    const [email,setemail] = useState('');
    const [pass,setpass] =   useState('');
    const [err,seterr] =     useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

      const handlelogin = async (e) => {
        e.preventDefault();

        try{
            await login(email,pass);
            navigate('/teslaccount');
        }catch(err)
        {
            seterr(err.message)
        }
      }
  return (
    <>
        <div className='signup-login' style = {{display:'flex',flexDirection:'column',alignItems:'center'}}> 
            <h1> Login In </h1> 
                <div className = "main-container" >
                          <form onSubmit = {handlelogin}>
                            <div className = "login-part">
                              { err && <h2> {err} </h2> }
                                    <span style = {{padding:'3% 7%',fontSize:'18px',fontWeight:'600' }} >
                                        <label htmlFor = "email"> Email - </label>
                                        <input type = "email" name = "email" placeholder = 'Enter your email' 
                                        onChange = {(e) => setemail(e.target.value)}  />
                                    </span>
                                    
                                    <span  style = {{padding:'3% 7%',fontSize:'18px',fontWeight:'600' }}>
                                      <label htmlFor = "password"> Password - </label>
                                      <input type = "password" name = "password" placeholder = 'Enter your Password' 
                                      onChange = {(e) => setpass(e.target.value)} /> 
                                    </span>
                                      <div style = {{padding:'15% 26%'}}>
                                        <button style = {{fontSize:'20px'}}> Login In </button>
                                      </div> 
                            </div>
                          </form>
                        <div className = "signup-part">
                          <div className = "account-creation">
                              <Link to = "/signup"> Create an Account  </Link>
                          </div>
                        </div>
                </div>
        </div>
    </>
  )
}

export default Login