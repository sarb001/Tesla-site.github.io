import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

const Login = () => {
  return (
    <div> 
    <h1> Login </h1> 
        <div className = "main-container" >
                <form>
                  
                    <label for = "email">  </label>
                    <input type = "email" name = "email" placeholder = 'Enter your email' />
                    
                    <label for = "password">  </label>
                    <input type = "password" name = "password" placeholder = 'Enter your Password' />

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