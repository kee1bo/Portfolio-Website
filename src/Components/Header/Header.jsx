import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header>
    <div className='header-class'>
      <div>
        <h5 className='h5-info'>Hey there, I'm</h5>
        <h1 className='h1-name'>Neerudi Sai Vikas,</h1>
        <h1 className='h1-name'>Machine Learning Engineer.</h1>
        <div className='alin'>
        <a target ="_blank"  href="src/assets/techResumeNSV.pdf"> 
        <button className='btn3'>Resume</button>
        </a>
        
        </div>
        
      </div>
      
    </div>
    </header>
  )
};

export default Header