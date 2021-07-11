import ExperienceItem from './ExperienceItem';
const ExperienceInfo = ({experience, onAdd, onChange, onDelete}) => {
    const experienceItems = experience.map((experienceItem)=>(
        <ExperienceItem
            key={experienceItem.id}
            id={experienceItem.id}
            experienceItem={experienceItem}
            onChange={onChange}
            onDelete={onDelete}
        ></ExperienceItem>
    ))
    return (
        <div className="w3-container margin">
            <h4 className="labels">Experience</h4>
            <div className="w3-card w3-padding">
                {experienceItems}
                <div className="w3-padding">
                    <button className="w3-btn btn-color" onClick={onAdd}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default ExperienceInfo;