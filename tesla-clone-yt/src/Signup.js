import React ,  {useState} from 'react'
import './Signup.css';
import { Link , useNavigate } from 'react-router-dom';
import { useAuth } from './features/UserContext';

const Signup = () => 
{
    const [email,setemail] = useState('');
    const [name,setname] = useState('');
    const [pass,setpass] = useState('');
    const [err,seterr] = useState('');
    const { signup } = useAuth();

     const navigate = useNavigate();

    const handlesignup = async (e) => {
        e.preventDefault();
        seterr("");
        try{
          await signup(email,pass,name);
          navigate('/login');
        }catch(err)
        {
            seterr(err.message);
        }
    }

  return (
    <div className='signup-login' style = {{display:'flex',flexDirection:'column',alignItems:'center'}} > 
       <h1> Sign up  </h1> 
         { err && <h2> {err} </h2> }
        <div className = "main-container" >
                <form onSubmit = {handlesignup}>
                    <div className = "signup-part">
                          <label htmlFor = 'name'> Name - </label>
                          <input type = "name" name = "name"    placeholder = 'Enter your Name' 
                          onChange={(e) => setname(e.target.value)} />

                          <label htmlFor = "email">  Email - </label>
                          <input type = "email" name = "email"  placeholder = 'Enter your email'
                          onChange={(e) => setemail(e.target.value)} />
                          
                          <label htmlFor = "password"> Password - </label>
                          <input type = "password" name = "password" placeholder = 'Enter your Password' 
                          onChange={(e) => setpass(e.target.value)}  />

                      <div style = {{padding:'5% 26%'}}> 
                          <button style = {{fontSize:'18px'}}> Sign Up   </button>
                      </div>
                      </div>
                </form>
                 <div className = "signup-part">
                    <span className = 'account-creation'>
                      <Link to = "/login"> Login Here </Link>
                    </span>
                 </div>
        </div>
    </div>
  )
}

export default Signup