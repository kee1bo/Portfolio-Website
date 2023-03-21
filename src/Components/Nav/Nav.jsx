import React from 'react'
import './Nav.css'
// import About from '../../Components/About/About';


const Nav = () => {
  return (
    <div className='nav-bar'>
        <div className='nav-bar-heading'>
          <a href="../../Components/About/About" className='btn'>about</a>
        <button className='btn'>projects</button>
        <button className='btn'>contact</button>

        </div>

    </div>
  )
}

export default Nav