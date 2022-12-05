import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div> 
       <h1> Signup  </h1> 
       <div className = "main-container" >
                <form>
                    <label for = 'name'>  </label>
                    <input type = "name" name = "name" placeholder = 'Enter your Name' />

                    <label for = "email">  </label>
                    <input type = "email" name = "email" placeholder = 'Enter your email' />
                    
                    <label for = "password">  </label>
                    <input type = "password" name = "password" placeholder = 'Enter your Password' />

                    <button> Sign Up Here  </button>
                </form>
                 <div className = "signup-part">
              <span>
                <Link to = "/login"> Login Here </Link>
              </span>
                 </div>
        </div>
    </div>
  )
}

export default Signup