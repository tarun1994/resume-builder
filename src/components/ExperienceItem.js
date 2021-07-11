const ExperienceItem = ({id,experienceItem, onChange, onDelete}) => {
    return (
        <>
        <div className="w3-padding">
                    <input className="w3-input w3-border" type="text" placeholder="Position"
                    name="position"
                    onChange={(evt)=> onChange(evt, experienceItem.id) }
                    value={experienceItem.position} />
                </div>
                <div className="w3-padding">
                    <input className="w3-input w3-border" type="text" placeholder="Company"
                    name="company"
                    onChange={(evt)=> onChange(evt, experienceItem.id) } value={experienceItem.company} />
                </div>
                <div className="w3-padding">
                    <input className="w3-input w3-border" type="text" placeholder="City"
                    name="city"
                    onChange={(evt)=> onChange(evt, experienceItem.id) }
                     value={experienceItem.city} />
                </div>
                <div className="w3-row-padding ">
                    <div className="w3-half">
                        <input className="w3-input w3-border" type="text" placeholder="From"
                        name="fromDate"
                        onChange={(evt)=> onChange(evt, experienceItem.id) }
                        value={experienceItem.fromDate} />
                    </div>
                    <div className="w3-half">
                        <input className="w3-input w3-border" type="text" placeholder="To"
                        name="toDate"
                        onChange={(evt)=> onChange(evt, experienceItem.id) }
                        value={experienceItem.toDate} />
                    </div>
                   
                </div>
                <div className="w3-padding">
                        <textarea className="w3-input w3-border" type="text" placeholder="Roles and Responsibility"
                        name="roles"
                        onChange={(evt)=> onChange(evt, experienceItem.id) }
                        value={experienceItem.roles} />
                        </div>
                <div className="w3-padding">
                    <button className="w3-btn btn-color" onClick={()=>onDelete('experience',experienceItem.id)}>Delete</button>
                </div>
        </>
    )
}
export default ExperienceItem;