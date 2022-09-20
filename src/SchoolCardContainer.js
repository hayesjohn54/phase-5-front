import React from "react";
import SchoolCard from "./SchoolCard";

function SchoolCardContainer({schools}){
    const renderSchoolCard= schools.map(schools=><SchoolCard key={schools.id} schools={schools}/>)
    return(
        <div className="schoolcard_container">
            {renderSchoolCard}
        </div>
    )

}

export default SchoolCardContainer;