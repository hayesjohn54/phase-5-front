
import React from "react";
import ContactCard from "./ContactCard";


function ContactUs({ contact}){

    const renderContact = contact.map(contact=><ContactCard key={contact.id} contact={contact}/>)
    

    
    return(
        <div className="contact-us">
            <div><img className="contact-image"
                src="https://images.squarespace-cdn.com/content/v1/5b61e24de2ccd18c7bce99ea/1586987824825-88SI7KM4IOAYVIZV81VF/westchester_right_pics.jpg?format=1000w"/></div>
            {renderContact}      

            
                
            

        </div>

        

    )
}

export default ContactUs;