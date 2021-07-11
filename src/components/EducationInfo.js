import { useState } from 'react';
import EducationItem  from './EducationItem';
const EducationInfo = ({education, onAdd, onChange, onDelete}) => {
    console.log(education);
    const educationItems = education.map((educationItem)=>(
        <EducationItem 
            key={educationItem.id}
            id={educationItem.id}
            educationItem={educationItem}
            onChange={onChange}
            onDelete={onDelete}
        ></EducationItem>
    ))
    return (
        <div className="w3-container margin">
            <h4 className="labels">Education</h4>
            <div className="w3-card w3-padding">
                {educationItems}
                <div className="w3-padding">
                    <button className="w3-btn btn-color" onClick={onAdd}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default EducationInfo;