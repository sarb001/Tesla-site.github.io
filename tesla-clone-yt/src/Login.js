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
    <div> 
    <h1> Login </h1> 
    { err && <h2> {err} </h2> }
        <div className = "main-container" >
                <form onSubmit = {handlelogin}>
                    <label htmlFor = "email">  </label>
                    <input type = "email" name = "email" placeholder = 'Enter your email' 
                    onChange = {(e) => setemail(e.target.value)}  />
                    
                    <label htmlFor = "password">  </label>
                    <input type = "password" name = "password" placeholder = 'Enter your Password' 
                    onChange = {(e) => setpass(e.target.value)} /> 

                    <button> Login In </button>
                </form>
                 <div className = "signup-part">
              <span>
                    Don't have an account? 
              </span>
                <Link to = "/signup"> Create an Account  </Link>
                 </div>
        </div>
    </div>
  )
}

export default Login