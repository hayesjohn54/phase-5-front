import React, {useEffect, useState} from "react";

import SchoolCardContainer from "./SchoolCardContainer";


function Home(){
    const [schools, setSchools] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/schools')
        .then (res=>res.json())
        .then(schoolsData=> setSchools(schoolsData))
      }, [])

      
    return (
            <div className='homeDiv'>
                <h1 className='homeTitle'>Welcome to ACDS!</h1>
                <SchoolCardContainer schools={schools} setSchools={setSchools}/>
            </div>
            
    )}

export default Home;