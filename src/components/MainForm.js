import Header from "./Header";
import PersonalInfoForm from './PersonalInfoForm';
import EducationInfo from './EducationInfo';
import emptyCV from '../utils/emptyCv';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import ExperienceInfo from './ExperienceInfo';
import Preview from './Preview';
const MainForm = () => {
    const [cv, setCv] = useState(emptyCV);
    const [showPreview, setShowPreview] = useState(false)
    const onAddEducation = () => {
        setCv((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    id: uuidv4(),
                    universityName: "",
                    city: "",
                    degree: "",
                    stream: "",
                    fromDate: "",
                    toDate: ""
                }
            ]
        }));
    }
    const onAddExperience = () => {
        setCv((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    id: uuidv4(),
                    position: "",
                    company: "",
                    city: "",
                    fromDate: "",
                    toDate: "",
                }
            ]
        }));
    };

    const handleExperienceChange = (e, id) => {
        const { name, value } = e.target;
        setCv((prev) => {
            const newExperience = prev.experience.map((experienceItem) => {
                if (experienceItem.id == id) {
                    return { ...experienceItem, [name]: value }
                }
                return experienceItem;
            })
            return { ...prev, experience: [...newExperience] }
        })
    }
    const onSubmit = () => {
        let toggle = !showPreview;
        setShowPreview(toggle);
    }

    const handleChangePersonelInfo = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setCv((prev) => ({
            ...prev,
            personalInfo: {
                ...prev.personalInfo,
                [name]: value
            }
        }))
    }
    const handleDeleteChange = (type, id) => {
        if (type === 'education') {
            setCv((prev) => {
                const newItem = prev.education.filter((educationItem) => {
                    if (educationItem.id !== id) {
                        return { ...educationItem }
                    }
                })
                return { ...prev, education: [...newItem] }
            })
        } else {
            setCv((prev) => {
                const newItem = prev.experience.filter((experienceItem) => {
                    if (experienceItem.id !== id) {
                        return { ...experienceItem }
                    }
                })
                return { ...prev, experience: [...newItem] }
            })
        }
    }
    const handleEducationChange = (e, id) => {
        const { name, value } = e.target;
        setCv((prev) => {
            const newEducation = prev.education.map((educationItem) => {
                if (educationItem.id == id) {
                    return { ...educationItem, [name]: value }
                }
                return educationItem;
            })
            return { ...prev, education: [...newEducation] }
        })
    }


    return (
        <div>
            <Header></Header>
            <PersonalInfoForm
                personalInfo={cv.personalInfo}
                onChange={handleChangePersonelInfo}>
            </PersonalInfoForm>
            <EducationInfo
                education={cv.education}
                onAdd={onAddEducation}
                onChange={handleEducationChange}
                onDelete={handleDeleteChange}
            ></EducationInfo>
            <ExperienceInfo
                experience={cv.experience}
                onAdd={onAddExperience}
                onChange={handleExperienceChange}
                onDelete={handleDeleteChange}
            ></ExperienceInfo>
            <div className="w3-padding">
                <button className="w3-btn btn-color" onClick={onSubmit}>Preview</button>
            </div>
           { showPreview && <Preview cv={cv}></Preview>}
        </div>
    );
}

export default MainForm;