import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    
  <nav className='nav'>
    <h1 className='nav-title'>TEST</h1>   
    <a href><NavLink to="/school-calender">School Calender</NavLink></a>
    <a href><NavLink to="/contact-us">Contact Us</NavLink></a>
    <a href><NavLink to="/resources">Resources</NavLink></a>
    <a href><NavLink to="/careers">Careers</NavLink></a>
    <a href><NavLink to="/news">News</NavLink></a>
    <a href><NavLink to="/events">Events</NavLink></a>
    <a href><NavLink to="/programs">Programs</NavLink></a>
    <a href><NavLink to="/about-us">About Us</NavLink></a>
    <a href><NavLink exact="true" to="/">Home</NavLink></a>  
 </nav>
    
  )
}

export default NavBar;