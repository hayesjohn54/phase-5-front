import './index.css';
import NavBar from './NavBar';
import Home from './Home'
import AboutUs from './AboutUs';
import Programs from './Programs';
import Events from './Events';
import News from './News';
import { useEffect, useState} from "react";

import { Navigate, Routes, Route } from 'react-router-dom';
import Careers from './Careers';
import Resources from './Resources';
import ContactUs from './ContactUs';
import SchoolCalender from './SchoolCalender';
import DonateButton from './DonateButton';
import AdultServices from './AdultServices';
import Forum from './Forum';
import CommentContainer from './CommentContainer';
import Login from './Login';


function App() {
  const [contact, setContact] = useState([])
  const [comments, setComments] = useState([])
  const [user, setUser] = useState(null)

  function fetchComments()  {
    fetch("http://localhost:3000/comments")
    .then(res => res.json())
    .then(comment => {
        setComments(comment);
    })
  }
  useEffect((fetchComments), []);
  
  

  useEffect(()=>{
    fetch('http://localhost:3000/contacts')
      .then(res=>res.json())
      .then(contactData => setContact(contactData))
  },[])

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  function handleUpdateComment(updatedComment){
    const updateComment = comments.map((comment)=> comment.id === comment.id ? updatedComment : comment);
    setComments(updateComment)
  }
if(!user) return <Login setUser={setUser}/>
  return (
    <div>
      
      <NavBar/>
      <DonateButton/>
        <Routes>
          <Route path='*' element={user == null ? <Navigate to="/login" replace/> : <Navigate to="/home" replace/>}/>
          <Route path="login" element={<Login user={user} setUser={setUser}/>}/>
          <Route path="comment-container" element={<CommentContainer comment={comments} fetchComments={fetchComments}/>}/>
          <Route path="forum" element={<Forum comments={comments} setComments={setComments} onUpdateComment={handleUpdateComment}/>}/>
          <Route path="adult-services" element={<AdultServices/>}/>
          <Route path="school-calender" element={<SchoolCalender/>}/>
          <Route path="contact-us" element={<ContactUs contact={contact} setContact={setContact}/>}/>
          <Route path="resources" element={<Resources/>}/>
          <Route path="careers" element={<Careers/>}/>
          
          <Route path="events" element={<Events/>}/>
          <Route path="programs" element={<Programs/>}/>
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="home" element={<Home/>}/>        
        </Routes>
        <DonateButton/>
      
      
      
      
    </div>
    
    
  );
}

export default App;
