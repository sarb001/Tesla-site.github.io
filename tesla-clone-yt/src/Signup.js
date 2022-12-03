import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {TfiWorld} from 'react-icons/tfi'
import ButtonPrimary from './ButtonPrimary';
import auth  from './Firebase';
import './Signup.css';
import SecondaryButton from './SecondaryButton';
import { login } from './features/userSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [fname,setfname] = useState('')
    const [lname,setlname] = useState('')

      const dispatch = useDispatch();
      const navigate = useNavigate()


      function signup(e){
        e.preventDefault();

        if(!fname){
          return alert('Please enter a First Name')
        }
        if(!lname){
          return alert('Please enter the Last Name')
        }

        auth.createUserWithEmailAndPassword(email,password).then((userAuth) => 
        {
            userAuth.user.updateProfile({
              displayName: fname
            }).then(() => 
            {
              dispatch(
                login({
                 email : userAuth.user.email,
                 uid:userAuth.user.uid,
                 displayName: fname,
              })
              )
                navigate('/teslaccount')
            })
        })
        .catch((error) => alert(error.message))
      }

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
             <h1> Create Account  </h1>
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
                       <span>
                            <SecondaryButton name = 'Create Account'  onClick={signup}/>
                       </span>
             </form>
                <div className = "login_divider">
                   <hr /> <span> OR </span> <hr />
               </div>
                    <Link to = "/login">
                          <ButtonPrimary  name = "Sign In" type = "submit" />
                    </Link>
           </div>
       </div>
    </div>
  )}

export default Signup