import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <nav class=" navbar navbar-expand-lg bg-body-tertiary">
        <div class="container ">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto navLinks  mb-2 mb-lg-0">
              <li class="nav-item ">
                <a class="nav-link  nav-link-title " aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-title " href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-title " href="#">Event Timeline</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-title " href="#">Our Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link-title " href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


  ) 
}

export default Navbar
