const EducationItem = ({id, educationItem, onChange, onDelete}) => {
    return (
        <>
        <div className="w3-padding">
                    <input className="w3-input w3-border" type="text" placeholder="University Name"
                    name="universityName"
                    onChange={(evt)=> onChange(evt, educationItem.id) }
                    value={educationItem.universityName} />
                </div>
                <div className="w3-padding">
                    <input className="w3-input w3-border" type="text" placeholder="Degree"
                    name="degree"
                    onChange={(evt)=> onChange(evt, educationItem.id) }
                    value={educationItem.degree} />
                </div>
                <div className="w3-padding">
                    <input className="w3-input w3-border" type="text" placeholder="Stream"
                    name="stream"
                    onChange={(evt)=> onChange(evt, educationItem.id) }
                    value={educationItem.stream} />
                </div>
                <div className="w3-row-padding ">
                    <div className="w3-half">
                        <input className="w3-input w3-border" type="text" placeholder="From YYYY"
                        name="fromDate"
                        onChange={(evt)=> onChange(evt, educationItem.id) }
                        value={educationItem.fromDate} />
                    </div>
                    <div className="w3-half">
                        <input className="w3-input w3-border" type="text" placeholder="To YYYY"
                        name="toDate"
                        onChange={(evt)=> onChange(evt, educationItem.id) }
                        value={educationItem.toDate} />
                    </div>
                </div>
                <div className="w3-padding">
                    <button className="w3-btn btn-color" onClick={()=>onDelete('education',educationItem.id)}>Delete</button>
                </div>
        </>
    )
}

export default EducationItem;