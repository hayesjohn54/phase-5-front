import './index.css';
import NavBar from './NavBar';
import Home from './Home'
import AboutUs from './AboutUs';
import Programs from './Programs';
import Events from './Events';
import News from './News';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Careers from './Careers';
import Resources from './Resources';
import ContactUs from './ContactUs';
import SchoolCalender from './SchoolCalender';

function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="school-calender" element={<SchoolCalender/>}/>
          <Route path="contact-us" element={<ContactUs/>}/>
          <Route path="resources" element={<Resources/>}/>
          <Route path="careers" element={<Careers/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="events" element={<Events/>}/>
          <Route path="programs" element={<Programs/>}/>
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="/" element={<Home/>}/>        
        </Routes>
      </BrowserRouter>
      
      
    </div>
    
    
  );
}

export default App;
