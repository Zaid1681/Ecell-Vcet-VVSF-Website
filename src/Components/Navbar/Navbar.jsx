import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <nav className=" navbar navbar-expand-lg bg-body-tertiary">
        <div className="container ">
          <a className="navbar-brand" href="#">VVSF</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto navLinks  mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link  nav-link-title " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-title " href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-title " href="#">Event Timeline</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-title " href="#">Our Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-title " href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


  ) 
}

export default Navbar
