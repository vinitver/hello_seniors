import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
const Axios = axios.create({baseURL:"http://localhost:8800/server"})
const Login = () => {
  const [inputs, setInputs]= useState({username:"", password:""});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange= e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit= async e=>{
    e.preventDefault()  //to avoid refreshing page after clicking button
    try{
    //  console.log("1")
    const res= await Axios.post("/auth/login", inputs)
    navigate("/");
   // console.log("2")
   setError(null)
    console.log(res)
    }catch(err){
      setError(err.response.data);
      console.log(error)
      //console.log(err)
    }
  }
  return (
    
      <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='username' name='username' onChange={handleChange}></input>
            <input type='password' placeholder='password' name='password' onChange={handleChange}></input>
            <button onClick={handleSubmit}>Login</button>
            {error && <p>{error}</p>}
            <span>
          Don't you have an account? <br/><Link to="/register">Register</Link>
        </span>
        </form>
        
      </div>

    
  )
}

export default Login
