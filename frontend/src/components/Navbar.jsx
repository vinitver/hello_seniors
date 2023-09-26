import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
      <div className='logo'>logo</div>
      <div className="links">
          <Link className="link" to="/?cat=placement">
            <h6>Placement</h6>
          </Link>
          <Link className="link" to="/?cat=internship">
            <h6>Internship</h6>
          </Link>
          <Link className="link" to="/?cat=project">
            <h6>Project</h6>
          </Link>
          <Link className="link" to="/?cat=seminar">
            <h6>Seminar</h6>
          </Link>
          <Link className="link" to="/?cat=elective">
            <h6>Elective</h6>
          </Link>
          
            
          <span className="write">
            <Link className="link" to="/createpost">
              Post
            </Link>

          </span>
          <span >Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
