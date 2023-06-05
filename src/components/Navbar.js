import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar' >
      <div className='links'>
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </div>

    </div>
  )
}

export default Navbar