import React from "react";

function ContactCard({contact}){
    return(
        <li className="cards__item">
        <div className="card">
        
          <div className="card__content">
            <h3 className="card__title" >{contact.program}</h3>
            <p className="card__text">{contact.address}</p>
            <p className="card-street">{contact.street}</p>
            <div className="card__detail">
            </div>
          </div>
          
          
        </div>
    
      </li>
    )
}

export default ContactCard;