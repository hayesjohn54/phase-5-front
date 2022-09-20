import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    
  <nav className='nav'>
      
    
    <a href><NavLink to="/forum">News</NavLink></a>
    <a href><NavLink to="/adult-services">Adult Services</NavLink></a>
    <a href><NavLink to="/school-calender">School Calender</NavLink></a>
    <a href><NavLink to="/contact-us">Contact Us</NavLink></a>
    <a href><NavLink to="/resources">Resources</NavLink></a>
    {/* <a href><NavLink to="/careers">Careers</NavLink></a> */}
    <a href><NavLink to="/programs">Programs</NavLink></a>
    <a href><NavLink to="/about-us">About Us</NavLink></a>
    <a href><NavLink exact="true" to="/">Home</NavLink></a>  
 </nav>
    
  )
}

export default NavBar;