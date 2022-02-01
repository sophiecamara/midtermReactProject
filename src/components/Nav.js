import React from 'react';
import { Link } from 'react-router-dom'
function Nav() {
const navStyle={
    color: "dark brown"
};

  return (
     <nav>
         <div>      
      

   
    <ul className='nav-links' >
        <Link  style={navStyle}to ='home'>
        <li>
         <h3>Home</h3> 
        </li>
        </Link>
        <Link style={navStyle}to='about'>
        <li>
          <h3>About</h3>
        </li>
        </Link>
        <Link style={navStyle}to='contact'>
        <li>
          <h3>Contact Us</h3> 
        </li>
        </Link>
    </ul>
    </div>
   </nav>
 
  );
}

export default Nav;