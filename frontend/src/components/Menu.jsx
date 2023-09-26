import React from 'react'
import { Link } from 'react-router-dom'
const posts=[
    {
        id:1, 
        title:'Lorenfvmdsf',
        desc:'Lorenfvmdsf LorenfvmdsfLorenfvmdsfLorenfvmdsfLorenfvmdsfvLorenfvmdsfLorenfvmdsf Lorenfvmdsfv Lorenfvmdsf Lorenfvmdsf Lorenfvmdsf LorenfvmdsfLorenfvmdsfLorenfvmdsf Lorenfvmdsf Lorenfvmdsf Lorenfvmdsf',
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    
    {
        id:3, 
        title:'Lorenfvmxcv dsf',
        desc:'Lorenfvmxvzcvzcvczx  dsf LorenfvmdsfLorenfvmdsfLorenfvmdsfLorenfvmdsfvLorenfvmdsfLorenfvmdsf Lorenfvmdsfv Lorenfvmdsf Lorenfvmdsf Lorenfvmdsf LorenfvmdsfLorenfvmdsfLorenfvmdsf Lorenfvmdsf Lorenfvmdsf Lorenfvmdsf',
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },]
const Menu = () => {
  return (
    <div className='menu'>
    <h1>Other post you may like</h1>
    <hr></hr>
    {posts.map(post=>(
        <div className="content1" key={post.id}>
        <div className='img1'>
            <img src={post.img} alt=" " />
        </div>
        <div className='contenty'>
            <Link to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
            </Link>
            
            <button>Read More</button>
         </div>
    </div>
    ))}
    </div>
  )
}

export default Menu
