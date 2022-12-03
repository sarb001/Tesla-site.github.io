import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {TfiWorld} from 'react-icons/tfi'
import './Login.css';
import ButtonPrimary from './ButtonPrimary';
import SecondaryButton from './SecondaryButton';
import auth  from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

const Login = () => {

  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const signin = (e) => {
      e.preventDefault()
     auth.signInWithEmailAndPassword(email,password)
     .then((userAuth) => 
     {
        dispatch(
          login({
              email : userAuth.user.email,
              uid : userAuth.user.uid,
              displayName : userAuth.user.displayName,
          })
        )
        navigate('/teslaccount')
     })
     .catch((error) =>  alert(error.message))
   }

  return (
    <div className='login'> 
         <div className="login_header">
           <div className="login_logo"> <Link>  <img src = "/tesla logoblack.png" /> </Link>
           </div>
            <div className="login_language">
                  <TfiWorld /> <span> en-US </span>
            </div>
         </div>
         <div className = "login_info">
           <h1> Sign In </h1>
           <form className = 'login_form'>
              <label htmlFor ='email'> Email Address </label>
              <input  type   = "email" id = "email" value = {email} onChange = {(e) => setemail(e.target.value)} />

              <label htmlFor='password'> Password  </label>
              <input  type = "password" id = "password" value = {password} onChange = {(e) => setpassword(e.target.value)} 
              />
            <ButtonPrimary  name = "Sign In" type = "submit" onClick = {signin}/>
           </form>
           <div className = "login_divider">
             <hr /> <span> OR </span> <hr />
           </div>
           <Link to = "/signup">
             <SecondaryButton name = 'create account' />
          </Link>
         </div>
     </div>
  )
}

export default Login