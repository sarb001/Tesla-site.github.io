import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {TfiWorld} from 'react-icons/tfi'
import ButtonPrimary from './ButtonPrimary';
import './Signup.css';

const Signup = () => {

    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [fname,setfname] = useState('')
    const [lname,setlname] = useState('')

      const dispatch = useDispatch();
      const navigate = useNavigate()

  return (
    <div> 
    
      <div className='signup'> 
           <div className="signup_header">
             <div className="signup_logo"> <Link>  <img src = "/tesla logoblack.png" /> </Link>
             </div>
              <div className="signup_language">
                    <TfiWorld /> <span> en-US </span>
              </div>
           </div>
           <div className = "signup_info">
             <h1> Sign In </h1>
             <form className = 'signup_form'> 

                <label htmlFor='fname'> First Name </label>
                <input  type = "fname" id = "fname" value = {fname} onChange = {(e) => setfname(e.target.value)} 
                />

                <label htmlFor='lname'> Last Name  </label>
                <input  type = "lname" id = "lname" value = {lname} onChange = {(e) => setlname(e.target.value)} 
                />

                <label htmlFor ='email'> Email Address </label>
                <input  type   = "email" id = "email" value = {email} onChange = {(e) => setemail(e.target.value)} />
  
                <label htmlFor='password'> Password  </label>
                 <input  type = "password" id = "password" value = {password} onChange = {(e) => setpassword(e.target.value)} 
                />

              <ButtonPrimary  name = "Sign In" type = "submit" />
             </form>
           </div>
       </div>
    </div>
  )}

export default Signup