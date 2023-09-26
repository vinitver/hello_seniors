import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
//import { Navigate } from 'react-router-dom'
const Axios = axios.create({baseURL:"http://localhost:8800/server"})
const Register = () => {
  
  const [inputs, setInputs]= useState({username:"", email:"",password:""});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange= e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit= async e=>{
    e.preventDefault()  //to avoid refreshing page after clicking button
    try{
     // console.log("1")
    await Axios.post("/auth/register", inputs);
    //console.log("22")
   navigate("/login");

    }catch(err){
     // console.log("aa")
      setError(err.response.data);

    }
  }
 // console.log(inputs)
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input type='text' placeholder='username' name='username' onChange={handleChange}></input>
            <input type='email' placeholder='email' name='email' onChange={handleChange}></input>
            <input type='password' placeholder='password' name='password' onChange={handleChange}></input>
            <button onClick={handleSubmit}>Register</button>
            {error && <p>{error}</p>}
            <span>
          Do you have an account? <br/><Link to="/login">Login</Link>
        </span>
        </form>
        
      </div>
  )
}

export default Register
